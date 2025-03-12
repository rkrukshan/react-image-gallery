import { useRef, useState } from "react";

import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";

const per_page = 20;
export default function Gallery() {
  const searchInp = useRef(null);
  const [img, setImg] = useState([]);
  const [pge, setPge] = useState(1);
  const [tpage, setTpage] = useState(0);

  const fetchImg = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${
          searchInp.current.value
        }&page=${pge}&per_page=${per_page}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImg(data.results);
      setTpage(data.total_pages);
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
    <></>
  );
}
