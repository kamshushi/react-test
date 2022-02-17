import axios from "axios";
import { PIXABAY_BASE_URL, PIXABAY_API_KEY } from "../utils/constants";
export const fetchImages = async (searchTerm) => {
  try {
    const { data, status } = await axios.get(
      `${PIXABAY_BASE_URL}?key=${PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
    );
    return { data, status };
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};
