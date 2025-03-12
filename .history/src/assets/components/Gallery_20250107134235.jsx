import { useRef } from "react";

export default function Gallery() {
    const searchInp=useRef(null);

   const formLoad=(event)=>{
    event.preventDefault();
    console.log(searchInp.current.value);
    
   }

   const btnSearch=(event)=>{
    searchInp.current.value=event
   }

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
        <button className="btn">Brain</button>
        <button className="btn">CODE</button>
        <button className="btn"> Tech</button>
        <button className="btn">React</button>
        <button className="btn">JS</button>
      </div>
    </div>
  );
}
