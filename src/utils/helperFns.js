import axios from "axios";
import { PIXABAY_BASE_URL, PIXABAY_API_KEY } from "../utils/constants";
export const fetchImages = async () => {
  try {
    const { data, status } = await axios.get(
      `${PIXABAY_BASE_URL}?key=${PIXABAY_API_KEY}&lang=en&q=yellow`
    );
    return { data, status };
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};
