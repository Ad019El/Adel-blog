import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="shadow-lg text-center rounded-lg p-12 pb-5 mb-8 mt-20 bg-black bg-opacity-30">
      <div className="relative left-0 right-0 h-8 -top-20">
        <Image
          className="align-middle rounded-full"
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          unoptimized
        />
      </div>
      <h1 className="text-white my-4 text-xl font-bold">{author.name}</h1>
      <p className="text-white my-4 text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
