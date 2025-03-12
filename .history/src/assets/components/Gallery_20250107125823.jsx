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
        <button className="bg-blue-500 text-white px-9 py-3 mr-3 rounded-xl ring-2 hover:ring-slate-500">Brain</button>
        <button className="bg-blue-500 text-white px-9 py-3 mr-3 rounded-xl ring-2 hover:ring-slate-500">CODE</button>
        <button className="bg-blue-500 text-white px-9 py-3 mr-3 rounded-xl ring-2 hover:ring-slate-500"> Tech</button>
        <button className="bg-blue-500 text-white px-9 py-3 mr-3 rounded-xl ring-2 hover:ring-slate-500">React</button>
        <button className="bg-blue-500 text-white px-9 py-3 mr-3 rounded-xl ring-2 hover:ring-slate-500">JS</button>
      </div>
    </div>
  );
}
