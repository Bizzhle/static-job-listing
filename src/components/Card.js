import React from "react";
import Tag from "./Tag";

function Card(props) {
  function createFlags(obj) {
    let outputString = [];
    if (obj.new) {
      outputString.push(
        <span
          key={Math.random()}
          className="mx-2 px-2 py-1 bg-dark-cyan rounded-full text-white font-semibold leading-tight uppercase "
        >
          New!
        </span>
      );
    }

    if (obj.featured) {
      outputString.push(
        <span
          key={Math.random()}
          className="px-2 py-1 bg-cyan-darkest rounded-full text-white font-semibold  leading-tight uppercase "
        >
          Featured!
        </span>
      );
    }

    return outputString;
  }

  return (
    <div className="md:max-w-6xl m-auto relative pt-16 md:pt-8 ">
      {props.data &&
        props.data.map((item, index) => {
          return (
            <div
              key={index}
              className="
                relative
                md:flex
                md:justify-between
                bg-white
                mx-4
                my-20
                p-12
                rounded-lg
                border-l-4
                hover:border-dark-cyan
                shadow-2xl"
            >
              <div className="md:flex">
                <div className="absolute md:static -top-10 left-0 ">
                  <img src={item.logo} alt="logo" />
                </div>

                <div className=" md:ml-5">
                  <div className="flex mt-6 md:mt-0">
                    <span className="py-2 mr-2 text-dark-cyan font-bold">
                      {item.company}
                      {createFlags(item)}
                    </span>
                  </div>
                  <h3 className="text-dark-cyan font-bold">{item.position}</h3>
                  <ul className="flex  list-disc list-inside py-3 border-b md:border-none text-xs font-thin text-gray-400">
                    <li className="mr-2 ">{item.postedAt}</li>
                    <li className="mr-2 ">{item.contract}</li>
                    <li className="mr-2 ">{item.location}</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center pt-3 md:mx-4 text-dark-cyan ">
                <Tag
                  key="role"
                  keyword={item.role}
                  deleteTags={props.addTags}
                  inFilter={false}
                />
                <Tag
                  key="level"
                  keyword={item.level}
                  deleteTags={props.addTags}
                  inFilter={false}
                />

                {item.languages.map((value, key) => (
                  <Tag
                    key={key}
                    keyword={value}
                    deleteTags={props.addTags}
                    inFilter={false}
                  />
                ))}
                {item.tools.map((v, i) => (
                  <Tag
                    key={i}
                    keyword={v}
                    deleteTags={props.addTags}
                    inFilter={false}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
