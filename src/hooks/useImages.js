import React, { useState, useEffect } from "react";
import { fetchImages } from "../utils/helperFns";

const useImages = () => {
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(async () => {
    setLoadingImages(true);
    const { data, status, error } = await fetchImages();
    if (data && status === 200) {
      setImages(data.hits);
    } else if (error) {
      setErrors(error);
      setImages([]);
    }
    setLoadingImages(false);
  }, []);

  return {
    images,
    setImages,
    loadingImages,
    setLoadingImages,
  };
};

export default useImages;
