import axios from "axios";

// import axios from "../../utils/axios";

export const updateSave = async (id) => {
  try {
    const response = await axios.patch(`http://localhost:9000/blogs/${id}`, {
      isSaved: true,
    });
    // console.log("Object property updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating object property:", error);
  }
};
