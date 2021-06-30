import React, { useEffect, useState } from "react";
import "./Row.css";
import {
    Link
  } from "react-router-dom";
const Row = ({ title, data, clickedImg, setClickedImg }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {data.map((citydata) => (
          <div
            className="card-item "
            key={citydata.id}
          >
                 <Link to={`city/${citydata.id}`}>
            <img className={`row-poster `} src={`${citydata.main_image}`} />
            </Link>
            <h5>{citydata.name}</h5>
          </div>
         
        ))}
      </div>
    </div>
  );
};

export default Row;
