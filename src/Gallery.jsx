import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";
import mainBg from "./assets/mainbg.jpeg";
import mainBg1 from "./assets/mainbg1.jpeg";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      original: mainBg,
      thumbnail: mainBg,
    },
    {
      original: mainBg1,
      thumbnail: mainBg1,
    },
  ]);
  const [thumbnailPosition, setThumbnailPosition] = useState("right");

  useEffect(() => {
    const token = "46xFCBZZvxwJJYKbmN53dY5FW3GndLzzzORjWs3k";
    const accID = "bbbbde9d437b7d633c9b7d9806510453";
    const hash = "wQ3QyOndpXrt0q_kgZAd5A";

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.cloudflare.com/client/v4/accounts/${accID}/images/v1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.result.images);
        setImages(
          response?.data?.result?.images?.map((item) => ({
            ...item,
            original: item.imageUrl,
            thumbnail: item.thumbnailUrl,
          }))
        );
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

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
      <ImageGallery
        items={images}
        lazyLoad
        showNav={false}
        thumbnailPosition={thumbnailPosition}
        autoPlay={true}
        slideInterval="5000"
      />
    </div>
  );
};

export default Gallery;
