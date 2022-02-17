import React from "react";
import useImages from "../hooks/useImages";
import Image from "./Image";
import Skeleton from "./Skeleton";

const PixabayImages = () => {
  const { images, loadingImages } = useImages();
  if (!loadingImages) {
    return <Skeleton />;
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
