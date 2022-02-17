import React from "react";
import useImages from "../hooks/useImages";
import Image from "./Image";
import Loader from "./Loader";

const PixabayImages = () => {
  const { images, loadingImages } = useImages();
  if (loadingImages) {
    return (
      <div className="flex items-center justify-center mt-32">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex justify-center flex-wrap mt-12">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default PixabayImages;
