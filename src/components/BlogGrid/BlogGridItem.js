import React from "react";
import { Link } from "react-router-dom";

const BlogGridItem = ({ blog }) => {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog;
  return (
    <>
      <div class="lws-card">
        <Link to={`/blogs/${id}`}>
          <img src={image} class="lws-card-image" alt={title} />
        </Link>
        <div class="p-4">
          <div class="lws-card-header">
            <p class="lws-publishedDate">{createdAt}</p>
            <p class="lws-likeCount">
              <i class="fa-regular fa-thumbs-up"></i>
              {likes}
            </p>
          </div>
          <Link to={`/blogs/${id}`} class="lws-postTitle">
            {title}
          </Link>
          <div class="lws-tags d-flex">
            {tags?.map((tag, i) => (
              <span key={i}>
                #{tag}
                {TimeRanges.length === i + 1 ? "" : " ,"}
              </span>
            ))}
            {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
          </div>

          <div class="flex gap-2 mt-4">
            {isSaved && <span class="lws-badge"> Saved </span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridItem;
