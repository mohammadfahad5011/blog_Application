import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/RelatedBlogs/RelatedBlogSlice";
import RelatedBlogItem from "./RelatedBlogItem";
import Loading from "../Loading";

const RelatedBlogList = ({ currentId, tags }) => {
  const dispatch = useDispatch();

  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.RelatedBlog
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ currentId, tags }));
  }, [dispatch, currentId, tags]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogItem key={blog.id} blog={blog} />
    ));
  }
  return (
    <>
      <aside>
        <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div class="space-y-4 related-post-container">{content}</div>
      </aside>
    </>
  );
};

export default RelatedBlogList;
