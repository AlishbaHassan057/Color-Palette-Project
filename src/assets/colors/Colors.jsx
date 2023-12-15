import React, { useState } from "react";
import "./style.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

const Colors = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      const data = new Values(color).all(10);
      setList(data);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      <div className="cont container border border-dark rounded-1 col-lg-6 mx-auto p-4 shadow mt-5">
        <h1 className="text-center display-3 fw-bolder mb-3">Color Palette</h1>
        <form>
          <label className="display-6 fw-bold mb-2">Your Color</label>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`form-control ${
              error ? "border-danger border-3" : "border-success border-3"
            }`}
            type="text"
            placeholder="For Example: Red"
          />
          <button
            onClick={handleClick}
            className="btn btn-danger w-100 my-2 mt-3"
          >
            Generate Color
          </button>
        </form>
      </div>
      <div className="mg box container mt-5 border border-dark rounded-1 mb-5">
        <div className="row">
          <h1 className="display-5 text-center fw-bold mt-2">Your Palette</h1>
          {list.map((item, index) => {
            return (
              <SingleColor key={index} {...item} i={index} code={item.hex} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Colors;
