import axios from "axios";

// import axios from "../../utils/axios";

export const getBlogs = async () => {
  const response = await axios.get("http://localhost:9000/blogs");
  return response.data;
};
