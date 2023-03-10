import axios from "axios";

export const updateLike = async (id) => {
  console.log("like", id);
  try {
    // Get the current blog post from the server
    const { data: currentBlogPost } = await axios.get(
      `http://localhost:9000/blogs/${id}`
    );

    // Update the likes property of the blog post
    const updatedBlogPost = {
      ...currentBlogPost,
      likes: currentBlogPost.likes + 1,
    };

    // Send a PATCH request to the server to update the blog post
    const response = await axios.patch(
      `http://localhost:9000/blogs/${id}`,
      updatedBlogPost
    );

    // console.log("Object property updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating object property:", error);
  }
};
