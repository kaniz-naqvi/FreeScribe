import React from "react";

const HomePage = () => {
  return (
    <main className="flex-1 p-4 flex flex-col text-center justify-center">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free<span className="text-blue-500 bold">Scribe</span>
      </h1>
      <h3 className="text-medium md:text-lg">
        Record <span className="text-blue-500">&rarr;</span> Transcribe
        <span className="text-blue-500">&rarr;</span> Translate
        <span className="text-blue-500">&rarr;</span>
      </h3>
      <button className="flex items-center justify-between mx-auto gap-4 w-72 max-w-full my-4  p-2 rounded-lg shadow-lg hover:scale-105 duration-200">
        <p className=" text-blue-600">Record</p>
        <i className="ri-mic-fill"></i>
      </button>
      <p className="text-base">
        Or&#160;
        <label className="text-blue cursor-pointer hover:text-blue-500 duration-200">
          Upload&#160;
          <input type="file" className="hidden" accept=".mp3, .wave" />
        </label>
        a mp3 file
      </p>
      <p className="italic text-slate-500 py-2">Free now free forever!</p>
    </main>
  );
};

export default HomePage;
