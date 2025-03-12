import { useEffect, useRef, useState } from "react";

import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const VITE_API_KEY = "8tYLegemx6RXvAsRZwd9Fl7T49CHbu_zYLKbEPklW5U";

const per_page = 20;

export default function Gallery() {
  const searchInp = useRef(null);
  const [images, setImages] = useState([]);

  const getImg = async (query) => {
    try {
      const result = await axios.get(
        `${API_URL}?query=${query}&page=1&per_page=${per_page}&client_id=${VITE_API_KEY}`
      );
      setImages(result.data.results);
    } catch (error) {
      console.error("Error: ", error.message);
    }
  };

  useEffect(() => {
    getImg("nature"); // Default query
  }, []);

  const formLoad = (event) => {
    event.preventDefault();
    getImg(searchInp.current.value);
  };

  const btnSearch = (query) => {
    searchInp.current.value = query;
    getImg(query);
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
        <button className="btn" onClick={() => btnSearch("Brain")}>Brain</button>
        <button className="btn" onClick={() => btnSearch("CODE")}>CODE</button>
        <button className="btn" onClick={() => btnSearch("Tech")}>Tech</button>
        <button className="btn" onClick={() => btnSearch("JS")}>JS</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
