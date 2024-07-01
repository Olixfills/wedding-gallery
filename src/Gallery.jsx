import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import { storage } from './firebase';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const token = "46xFCBZZvxwJJYKbmN53dY5FW3GndLzzzORjWs3k";
    const accID = "bbbbde9d437b7d633c9b7d9806510453";
    const hash = "wQ3QyOndpXrt0q_kgZAd5A";

    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.cloudflare.com/client/v4/accounts/${accID}/images/v1`,
          {
            method: "GET", // or 'POST' if needed
            headers: {
              "Content-Type": "application/json",
              // Add other headers as needed
              Authorization: `Bearer ${token}`, // Example header
              // 'Accept': 'application/json',
              // 'Other-Custom-Header': 'HeaderValue'
            },
          }
        );
        const data = await response.json();
        // Assuming the API returns an array of objects with `imageUrl`
        setImages(
          data.map((item) => ({
            ...item,
            original: item.imageUrl,
            thumbnail: item.thumbnailUrl,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="h-screen w-screen">
      <ImageGallery
        items={images}
        lazyLoad
        showNav={false}
        thumbnailPosition="right"
        autoPlay={true}
        slideInterval="5000"
      />
    </div>
  );
};

export default Gallery;
