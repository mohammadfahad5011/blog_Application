// import axios from "axios";

// // import axios from "../../utils/axios";

// export const getRealatedBlogs = async () => {
//   // const limit = 5;
//   // let queryString =
//   //   tags?.length > 0
//   //     ? tags.map((tag) => `tags_like=${tag}`).join("&") +
//   //       `&id_ne=${currentId}&_limit=${limit}`
//   //     : `id_ne=${currentId}&_limit=${limit}`;

//   // console.log(queryString);

//   // const res = axios.get(`/blogs?${queryString}`);
//   const res = axios.get("http://localhost:9000/blogs/2");
//   //localhost:9000/blogs?tags_like=javascript&tags_like=nodejs&tags_like=react&id_ne=1&_limit=5http:
//   return res.data;
// };

import axios from "axios";

export const getRelatedBlogs = async ({ currentId, tags }) => {
  try {
    const limit = 5;
    let queryString =
      tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${currentId}&_limit=${limit}`
        : `id_ne=${currentId}&_limit=${limit}`;

    console.log(queryString);
    const res = await axios.get(`http://localhost:9000/blogs?${queryString}`);
    return res.data;
    // const res = await axios.get(
    //   "http://localhost:9000/blogs?tags_like=javascript&tags_like=nodejs&tags_like=react&id_ne=1&_limit=5"
    // );
    // return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
