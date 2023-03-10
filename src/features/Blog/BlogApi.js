import axios from "axios";

// import axios from "../../utils/axios";

export const getBlog = async (id) => {
  const response = await axios.get(`http://localhost:9000/blogs/${id}`);
  return response.data;
};
