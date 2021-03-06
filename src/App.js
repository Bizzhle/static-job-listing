import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Tag from "./components/Tag";
import datajs from "./data.json";

function App() {
  const [data, setData] = useState(datajs);
  const [tags, setTags] = useState([]);

  const initialState = [];

  // useEffect(() => {
  //   getData();
  // }, [setData]);

  // const getData = () => {
  //   fetch("data.json")
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       setData(myJson);
  //     });
  // };

  function addTags(newTag) {
    const tagArray = [...tags, newTag];
    setTags(tagArray.filter((item, index) => tagArray.indexOf(item) === index));
    handleFilter(tagArray);
  }

  function handleFilter(tagArray) {
    setData(
      datajs.filter((item) => {
        const keywords = [item.role, item.level];
        if ("languages" in item) keywords.push(...item.languages);
        if ("tools" in item) keywords.push(...item.tools);
        const matchedKeywords = tagArray.filter((tag) =>
          keywords.find((item) => item === tag)
        );
        return matchedKeywords.length === tagArray.length;
      })
    );
  }

  function deleteTags(targetTag) {
    const tagList = tags.filter((item) => item !== targetTag);
    setTags(tagList);
    handleFilter(tagList);
  }

  const allClear = (e) => {
    e.preventDefault();
    setTags(initialState);
    handleFilter([]);
  };

  return (
    <div className="bg-cyan-filter min-h-screen">
      <Header />

      <div className="relative">
        <div
          type="text"
          className={
            tags.length === 0
              ? "hidden"
              : "absolute -top-16 md:-top-9 left-1/2 transform -translate-x-1/2  items-center flex justify-between p-2 bg-white w-9/12 rounded-md"
          }
        >
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag
                key={tag}
                keyword={tag}
                deleteTags={deleteTags}
                inFilter={true}
              />
            ))}
          </div>
          <span
            onClick={(e) => allClear(e)}
            className="flex items-center cursor-pointer px-2 bg-cyan-dark hover:underline rounded text-white font-semibold leading-tight "
          >
            clear
          </span>
        </div>
        <div>
          <Card data={data} addTags={addTags} />
        </div>
      </div>
    </div>
  );
}

export default App;
