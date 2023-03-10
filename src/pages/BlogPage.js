import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Blog from "../components/Descreption/Blog";
import GoBackHome from "../components/GoBackHome";
import RelatedBlogList from "../components/RelatedBlog/RelatedBlogList";
import { fetchBlog } from "../features/Blog/BlogSlice";
import { fetchRelatedBlogs } from "../features/RelatedBlogs/RelatedBlogSlice";
const BlogPage = () => {
  const { blog } = useSelector((state) => state.blog);
  const { id, tags } = blog;

  return (
    <>
      <GoBackHome />
      <section class="post-page-container">
        <Blog />
        <RelatedBlogList currentId={id} tags={tags} />
      </section>
    </>
  );
};

export default BlogPage;
