//problem when clickend like ui not update instantly

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { patchLiked } from "../../features/Like/LikeSlice";

// const Like = ({ id, likes }) => {
//   const dispatch = useDispatch();
//   // const { blog: oldBlog } = useSelector((state) => state.blog);
//   // const { likes: oldLikes } = oldBlog;
//   // const { blog } = useSelector((state) => state.like);
//   // const { likes } = blog;

//   useEffect(() => {}, []);

//   const handleLike = () => {
//     dispatch(patchLiked(id));
//   };

//   return (
//     <>
//       <button onClick={handleLike} className="like-btn" id="lws-singleLinks">
//         <i className="fa-regular fa-thumbs-up"></i>
//         {/* {Object.keys(blog).length === 0 ? oldLikes : likes} */}
//         {likes}
//       </button>
//     </>
//   );
// };

// export default Like;

//problem solved when clickend like ui  update instantly

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { patchLiked } from "../../features/Like/LikeSlice";

const Like = ({ id, likes }) => {
  const dispatch = useDispatch();
  const [currentLikes, setCurrentLikes] = useState(likes);

  useEffect(() => {
    setCurrentLikes(likes);
  }, [likes]);

  const handleLike = () => {
    setCurrentLikes(currentLikes + 1);
    dispatch(patchLiked(id));
  };

  return (
    <>
      <button onClick={handleLike} className="like-btn" id="lws-singleLinks">
        <i className="fa-regular fa-thumbs-up"></i>
        {currentLikes}
      </button>
    </>
  );
};

export default Like;
