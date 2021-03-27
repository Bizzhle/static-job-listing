import React from "react";
import { MdCancel } from "react-icons/md";

function Tag({ keyword, deleteTags, inFilter }) {
  function handleClick() {
    deleteTags(keyword);
  }
  return (
    <button className="flex rounded-md mx-1 my-1 cursor-pointer  bg-cyan-light ">
      <span
        onClick={handleClick}
        className=" px-2 py-2 font-semibold text-dark-cyan "
      >
        {keyword}
      </span>
      <MdCancel
        className={
          inFilter
            ? "bg-dark-cyan text-white w-full h-full px-2 rounded-r-md"
            : "hidden"
        }
        onClick={handleClick}
      />
    </button>
  );
}

export default Tag;
