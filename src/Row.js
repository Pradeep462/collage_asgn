import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, data, clickedImg, setClickedImg }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {data.map((citydata) => (
          <div
            className="card-item "
            key={citydata.id}
            onClick={() => setClickedImg(citydata)}
          >
            <img className={`row-poster `} src={`${citydata.main_image}`} />
            <h5>{citydata.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
