import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import { storage } from './firebase';
// import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Gallery = () => {
  const [images, setImages] = useState([
    // {
    //   original:
    //     "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481349518771-20055b2a7b24%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Drandom%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fHx8MTcxODAyNDU0Nnww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60",

    //   thumbnail:
    //     "https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481349518771-20055b2a7b24%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Drandom%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fHx8MTcxODAyNDU0Nnww%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60",
    // },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUiLjjYOfwwE_Nwa66kdjVgIgoVVLHx85eQ&s",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUiLjjYOfwwE_Nwa66kdjVgIgoVVLHx85eQ&s",
    },
    {
      original:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
      thumbnail:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyF2nLH7C9AcRAkcUhDkLD5nD-AwTZGymow&s",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyF2nLH7C9AcRAkcUhDkLD5nD-AwTZGymow&s",
    },
    {
      original:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rwoIHRCF4ZoMas_pCPLv0OpGAsMjqlCmAA&s",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rwoIHRCF4ZoMas_pCPLv0OpGAsMjqlCmAA&s",
    },
  ]);

  useEffect(() => {
    // const fetchImages = async () => {
    //   const listRef = ref(storage, 'wedding-photos');
    //   const res = await listAll(listRef);
    //   const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
    //   setImages(urls);
    // };
    // fetchImages();
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
