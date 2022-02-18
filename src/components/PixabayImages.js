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
    <main className="flex justify-center flex-wrap mt-12">
      {images.length > 0 ? (
        images.map((image) => <Image key={image.id} image={image} />)
      ) : (
        <h1>No Images found</h1>
      )}
    </main>
  );
};

export default PixabayImages;
