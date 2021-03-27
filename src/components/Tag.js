import React from "react";
import { MdCancel } from "react-icons/md";

function Tag({ keyword, deleteTags, inFilter }) {
  function handleClick() {
    deleteTags(keyword);
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className=" mx-1 p-2 rounded-md font-semibold bg-cyan-light text-dark-cyan border-red-600 border-2"
      >
        {keyword}
      </button>
    </div>
  );
}

export default Tag;
