import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/Blogs/BlogSlice";
import blogReducer from "../features/Blog/BlogSlice";
import RelatedBlogReducer from "../features/RelatedBlogs/RelatedBlogSlice";
import savedReducer from "../features/Save/SaveSlice";
import likeReducer from "../features/Like/LikeSlice";
import filterReducer from "../features/Filter/FilterSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    RelatedBlog: RelatedBlogReducer,
    saved: savedReducer,
    like: likeReducer,
    filter: filterReducer,
  },
});
