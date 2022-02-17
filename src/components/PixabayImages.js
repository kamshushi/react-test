import React from "react";
import useImages from "../hooks/useImages";
import Image from "./Image";

const PixabayImages = () => {
  const { images, loading, setImages, setLoadingImages } = useImages();

  return (
    <div className="flex justify-center flex-wrap mt-12">
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default PixabayImages;
