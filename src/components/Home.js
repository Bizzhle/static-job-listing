import React, { useState } from "react";
import Header from "./Header";
import Listing from "./Listing";
import SearchBar from "./SearchBar";

function Home(props) {
  const [tags, setTags] = useState([]);

  const selectedTags = [];

  const reset = (e) => {
    e.preventDefault();
    setTags(selectedTags);
  };

  const addTags = (tag) => {
    !tags.includes(tag) && setTags((prevState) => [...prevState, tag]);
  };

  const removeTags = (tag) => {
    const filteredQueries = tags.filter((query) => query !== tag);
    setTags(filteredQueries);
  };

  const filterData = () => {
    return;
  };

  return (
    <div className=" font-spartan">
      <Header />
      <SearchBar
        filterValues={tags}
        removeTags={removeTags}
        reset={reset}
        numFilters={tags.length}
      />

      <div>
        <Listing onClick={(tags) => addTags(tags)} />
      </div>
    </div>
  );
}

export default Home;
