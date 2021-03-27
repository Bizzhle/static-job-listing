import React from "react";
import { JobData } from "./JobData";

function Listing(props) {
  return (
    <div className="border-red-600 border-8">
      {JobData.map((jobdata, index) => {
        return (
          <div
            key={index}
            className="relative md:flex md:justify-between bg-white mx-4 my-20 p-8 rounded-lg border-l-4 border-dark-cyan shadow-2xl"
          >
            <div className="md:flex">
              <div className="absolute md:static -top-10 left-0">
                <img src={jobdata.logo} alt="logo" />
              </div>
              <ul className="flex mt-6">
                <li className="text-dark-cyan font-bold">{jobdata.company}</li>
                <li className="text-dark-cyan font-bold">{}</li>
                <li>{jobdata.featured}</li>
              </ul>
              <h3 className="pt-3 font-bold hover:text-dark-cyan ">
                {jobdata.position}
              </h3>
              <ul className="flex  py-3 border-b md:border-none text-xs font-thin">
                <li className="mr-2">{jobdata.postedAt}</li>
                <li className="mr-2">{jobdata.contract}</li>
                <li className="mr-2">{jobdata.location}</li>
              </ul>
            </div>
            <ul className="flex pt-3">
              {jobdata.languages.map((value, key) => (
                <li
                  key={value}
                  value={value}
                  className="mr-2 p-2 rounded-md text-dark-cyan bg-cyan-light shadow-2xl"
                  onClick={(e) => props.onClick(e.target.value)}
                >
                  {value}
                </li>
              ))}
              {jobdata.tools.map((value, i) => (
                <li
                  key={i}
                  value={value}
                  className="mr-2 p-2 rounded-md text-dark-cyan bg-cyan-light shadow-2xl"
                  onClick={(e) => props.onClick(e.target.value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Listing;
