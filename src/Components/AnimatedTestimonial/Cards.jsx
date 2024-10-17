import React from "react";

const Cards = ({ quote, author, role, img, altText }) => {
  return (
    <div className="mx-auto md:w-[25vw] w-[70vw] ">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl font-poppins p-2 md:p-4 h-[40vh] shadow-white rounded-lg text-white md:h-[300px] items-center justify-center flex flex-col">
        <p className="text-sm md:text-lg italic mb-4">{quote}</p>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-14 w-14 rounded-full size-fit object-cover" src={img} alt={altText} />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium">{author}</div>
            {role && <div className="text-sm text-gray-400">{role}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
