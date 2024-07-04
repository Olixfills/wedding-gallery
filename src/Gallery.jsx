import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [thumbnailPosition, setThumbnailPosition] = useState("right");

  // Utility function to randomize an array
  const randomizeArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Fetch images from server
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://ola-image-server.onrender.com/fetch/images`
      );
      const fetchedImages = response?.data?.response?.map((item) => ({
        ...item,
        original: item.variants[0],
        thumbnail: item.variants[0],
      }));

      setImages(randomizeArray(fetchedImages));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Initial fetch and set interval for fetching every 5 minutes
  useEffect(() => {
    fetchImages();
    const intervalId = setInterval(fetchImages, 300000); // 300000 ms = 5 minutes

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Handle thumbnail position based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setThumbnailPosition("bottom");
      } else {
        setThumbnailPosition("right");
      }
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col">
      {!images[0] ? (
        <div className="min-h-screen w-screen flex justify-center items-center">
          <h6>Loading...</h6>
        </div>
      ) : (
        <ImageGallery
          items={images}
          lazyLoad
          showNav={false}
          thumbnailPosition={thumbnailPosition}
          autoPlay={true}
          slideInterval={3000}
        />
      )}
    </div>
  );
};

export default Gallery;
