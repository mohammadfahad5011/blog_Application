import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogItem = ({ blog }) => {
  const { id, image, title, createdAt, tags } = blog;
  return (
    <>
      <div class="card">
        <Link to={`/blogs/${id}`}>
          <img src={image} class="card-image" alt={title} />
        </Link>
        <div class="p-4">
          <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
            {title}
          </a>
          <div class="mb-0 tags d-flex">
            {/* {tags.map((tag) => (
              <span>#{tag},</span>
            ))} */}
            {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
            {tags?.map((tag) => (
              <span>#{tag},</span>
            ))}
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    </>
  );
};

export default RelatedBlogItem;
