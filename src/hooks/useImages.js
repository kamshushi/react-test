import React, { useState, useEffect } from "react";
import useSearch from "../Contexts/SearchContext";
import { fetchImages } from "../utils/helperFns";

const useImages = () => {
  const { searchTerm } = useSearch();
  const [images, setImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(async () => {
    setLoadingImages(true);
    const { data, status, error } = await fetchImages(searchTerm);
    if (data && status === 200) {
      setImages(data.hits);
    } else if (error) {
      setErrors(error);
      setImages([]);
    }
    setLoadingImages(false);
  }, [searchTerm]);

  return {
    images,
    setImages,
    loadingImages,
    setLoadingImages,
    errors,
  };
};

export default useImages;
