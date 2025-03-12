export default function Gallery() {
  return (
    <div className="">
      <h1 className="font-bold text-5xl text-blue-700 text-center">
        Image Search
      </h1>
      <div className="mt-10 text-3">
        <input
          type="search"
          placeholder="Search ..."
          className="w-full rounded-full ring-4 ring-blue-600 p-3"
        />
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn">Brain</button>
        <button className="btn">CODE</button>
        <button className="btn"> Tech</button>
        <button className="btn">React</button>
        <button className="btn">JS</button>
      </div>
    </div>
  );
}
