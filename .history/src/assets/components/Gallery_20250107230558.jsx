import { useCallback, useEffect, useRef, useState } from "react";

import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";

const per_page = 20;
export default function Gallery() {
  const searchInp = useRef(null);
  const [img, setImg] = useState([]);
  const [pge, setPge] = useState(1);
  const [tpage, setTpage] = useState(0);
  const [errMsg, setErrmsg] = useState("");

  const fetchImg = useCallback(async () => {
    try {
      if (searchInp.current.value) {
        setErrmsg("");
        const { data } = await axios.get(
          `${API_URL}?query=${
            searchInp.current.value
          }&page=${pge}&per_page=${per_page}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImg(data.results);
        setTpage(data.total_pages);
      }
    } catch (error) {
      setErrmsg("Error while Fetching Try again later...");
      console.log("Error: ", error.message);
    }
  }, [pge]);

  useEffect(() => {
    fetchImg();
  }, [fetchImg, pge]);

  const resetPage_fetchimg = () => {
    fetchImg();
    setPge(1);
  };

  const formLoad = (event) => {
    event.preventDefault();
    resetPage_fetchimg();

    console.log(searchInp.current.value);
  };

  const btnSearch = (event) => {
    searchInp.current.value = event;
    resetPage_fetchimg();
  };

  console.log(pge);

  return (
    <>
      <div>
        <h1 className="font-bold text-5xl text-blue-700 text-center">
          Image Search
        </h1>

        {errMsg && (
          <p className="font-bold text-5xl text-red-700 text-center my-16 animate-pulse">
            {errMsg}
          </p>
        )}

        <div className="mt-10 text-3xl text-center">
          <form action="" onSubmit={formLoad}>
            <input
              type="search"
              placeholder="Search Your Image ..."
              className="w-full rounded-full ring-4 ring-blue-600 p-3"
              value
              ref={searchInp}
            />
          </form>
        </div>
        <div className="grid gap-5  lg:flex justify-center mt-10 mx-auto">
          <button className="btn" onClick={() => btnSearch("Code")}>
            Code
          </button>
          <button className="btn" onClick={() => btnSearch("Programming")}>
            Programming
          </button>
          <button className="btn" onClick={() => btnSearch("Technology")}>
            Technology
          </button>
          <button className="btn" onClick={() => btnSearch("Cryptocurrency")}>
            CryptoCurrency
          </button>
        </div>

        <div className="flex gap-5 flex-wrap justify-center mt-10">
          {img.map((pic) => {
            return (
              <div key={pic.id} className="">
                <img
                  className="img"
                  src={pic.urls.small}
                  alt={pic.alt_description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center mt-16">
        {pge > 1 && (
          <button
            className="btn"
            onClick={() => {
              setPge(pge - 1);
            }}>
            Previous
          </button>
        )}
        {pge < tpage && (
          <button
            className="btn"
            onClick={() => {
              setPge(pge + 1);
            }}>
            Next
          </button>
        )}
      </div>
    </>
  );
}
