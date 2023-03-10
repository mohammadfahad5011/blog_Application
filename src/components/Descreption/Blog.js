import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../../features/Blog/BlogSlice";

import Like from "./Like";
import Saved from "./Saved";

const Blog = () => {
  const dispatch = useDispatch();
  // const { title, description, image, tags, likes, isSaved, createdAt } = useSelector((state) => state.Blog);
  const { blog } = useSelector((state) => state.blog);

  const { title, description, image, tags, likes, isSaved, createdAt } = blog;

  const params = useParams();
  const id = params.blogId;
  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [dispatch, id]);

  return (
    <main class="post">
      <img
        src={image}
        alt={title}
        class="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div class="tags" id="lws-singleTags">
          {/* {tags.map((tag) => (
            <span>#{tag},</span>
          ))} */}
          {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          {tags?.map((tag) => (
            <span>#{tag},</span>
          ))}
        </div>
        <div class="btn-group">
          <Like id={id} likes={likes} />
          <Saved id={id} />
        </div>
        <div class="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
