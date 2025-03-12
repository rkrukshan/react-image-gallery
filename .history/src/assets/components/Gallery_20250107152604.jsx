import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";

const API_URL = "https://api.unsplash.com/search/photos";
const VITE_API_KEY='M4lqLyDUc2hP0ApwPhQFJjlMWPuteQEy0wx2nACjuRM';

const per_page = 20;
export default function Gallery() {
  console.log("KEY", VITE_API_KEY);
  const searchInp = useRef(null);

  useEffect(() => {
    const getImg = async () => {
      try {
        const result = await axios.get(
          `${API_URL}?query=${
            searchInp.current
          }&page=1&per_page=${per_page}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        console.log("result", (await result).data);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    };

    getImg();
  }, []);

  const formLoad = (event) => {
    event.preventDefault();
    console.log(searchInp.current.value);
  };

  const btnSearch = (event) => {
    searchInp.current.value = event;
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
            value={'nature'}
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
