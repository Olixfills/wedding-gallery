import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const token = "46xFCBZZvxwJJYKbmN53dY5FW3GndLzzzORjWs3k";
    const accID = "bbbbde9d437b7d633c9b7d9806510453";
    const hash = "wQ3QyOndpXrt0q_kgZAd5A";

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.cloudflare.com/client/v4/accounts/bbbbde9d437b7d633c9b7d9806510453/images/v1",
          {
            headers: {
              Authorization: "Bearer 46xFCBZZvxwJJYKbmN53dY5FW3GndLzzzORjWs3k",
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
