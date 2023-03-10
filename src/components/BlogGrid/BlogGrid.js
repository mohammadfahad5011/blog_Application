import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/Blogs/BlogSlice";
import Loading from "../Loading";
import BlogGridItem from "./BlogGridItem";

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  const { filter, sort } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }

  // when no filter

  // if (!isError && !isLoading && blogs?.length > 0) {
  //   content = blogs.map((blog) => <BlogGridItem key={blogs.id} blog={blog} />);
  // }

  if (!isError && !isLoading && blogs?.length > 0) {
    let filteredBlogs = blogs;

    if (filter === "saved") {
      filteredBlogs = blogs.filter((blog) => blog.isSaved);
    }
    //problem:
    // if (sort === "newest") {
    //   filteredBlogs.sort(
    //     (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    //   );
    // } else if (sort === "most_liked") {
    //   filteredBlogs.sort((a, b) => b.likes - a.likes);
    // }

    //solved:
    if (sort === "newest") {
      filteredBlogs = [...filteredBlogs].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (sort === "most_liked") {
      filteredBlogs = [...filteredBlogs].sort((a, b) => b.likes - a.likes);
    }

    content = filteredBlogs.map((blog) => (
      <BlogGridItem key={blog.id} blog={blog} />
    ));
  }
  return (
    <main class="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default BlogGrid;
