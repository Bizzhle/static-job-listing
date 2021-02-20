import React from "react";
import Tags from "./Tags";

function SearchBar(props) {
  let filterValues = props.filterValues;

  return (
    <div className="flex justify-between border-red-600 border-2 h-12 mx-4">
      <div className="flex">
        {filterValues.map((value, i) => (
          <Tags
            key={i}
            btn={value}
            index={i}
            deleteBtn={() => props.removeTags(value)}
          />
        ))}
      </div>
      {props.numFilters > 0 && (
        <div className="">
          <span
            className="bg-cyan-light hover:bg-dark-cyan flex items-center text-dark-cyan hover:text-cyan-light font-bold p-1 m-1 rounded-md"
            onClick={(e) => props.reset(e)}
          >
            clear all
          </span>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
