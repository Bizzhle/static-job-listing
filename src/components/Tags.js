import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

function Tags(props) {
  const { btn, deleteBtn } = props;

  const _delete = (e) => {
    e.preventDefault();
    deleteBtn(e.target.value);
  };

  return (
    <div>
      <span
        name="btn"
        className="bg-cyan-light hover:bg-dark-cyan flex items-center text-dark-cyan hover:text-cyan-light font-bold m-1"
        id="btn"
        select="multiple"
      >
        {btn}
        <button className="bg-dark-cyan  text-cyan-light ml-2 p-2 border-none ">
          <CgClose onClick={(e) => _delete(e)} />
        </button>
      </span>
    </div>
  );
}

export default Tags;
