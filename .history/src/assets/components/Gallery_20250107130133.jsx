export default function Gallery() {
  return (
    <div className="">
      <h1 className="font-bold text-5xl text-blue-700 text-center">
        Image Search
      </h1>
      <div className="mt-10">
        <input
          type="search"
          className="w-full rounded-full ring-4 ring-blue-600 p-3"
        />
      </div>
      <div className="flex justify-center mt-10">
        <button className="bt">Brain</button>
        <button className="bt">CODE</button>
        <button className="bt"> Tech</button>
        <button className="bt">React</button>
        <button className="bt">JS</button>
      </div>
    </div>
  );
}
