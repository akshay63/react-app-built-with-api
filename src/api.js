import axios from "axios";

const searchImages = async function (term) {
  const res = await axios.get("https://api.unsplash.com//search/photos", {
    headers: {
      Authorization: "Client-ID w-gj3iPPVFMRWDtzRw4YKjAPAfCboWUJXeEGewpdfLs",
    },
    params: {
      query: term,
    },
  });
  // console.log(res);
  return res.data.results;
};

export default searchImages;
