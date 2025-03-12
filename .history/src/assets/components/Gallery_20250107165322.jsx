import { useRef, useState } from "react";

import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";

const per_page = 20;
export default function Gallery() {
  const searchInp = useRef(null);
  const [img,setImg]=useState([]);
  const [tpage,setTpage]=useState(0);

  const fetchImg = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchInp.current.value
        }&page=1&per_page=${per_page}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      setImg(data.result)
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  const formLoad = (event) => {
    event.preventDefault();
    fetchImg();

    console.log(searchInp.current.value);
  };

  const btnSearch = (event) => {
    searchInp.current.value = event;
    fetchImg();
  };

  return (
    <div className="">
      <h1 className="font-bold text-5xl text-blue-700 text-center">
        Image Search
      </h1>
      <div className="mt-10 text-3xl text-center">
        <form action="" onSubmit={formLoad}>
          <input
            type="search"
            placeholder="Search Your Image ..."
            className="w-full rounded-full ring-4 ring-blue-600 p-3"
            ref={searchInp}
          />
        </form>
      </div>
      <div className="flex justify-center mt-10 mx-auto">
        <button className="btn" onClick={() => btnSearch("Brain")}>
          Brain
        </button>
        <button className="btn" onClick={() => btnSearch("CODE")}>
          CODE
        </button>
        <button className="btn" onClick={() => btnSearch("Tech")}>
          {" "}
          Tech
        </button>
        <button className="btn" onClick={() => btnSearch("JS")}>
          JS
        </button>
      </div>
    </div>
  );
}
