import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

Card.propTypes = {};


function Card({status}) {
  const [option, setOption] = useState(status);
      const change = (event) => {
        setOption(event.target.value);
      };
  return (
    <div>
        <div className="card-body">
            <h3 className="card-title">title: Task 1</h3>
            <p className="card-text">creator: Author 1 </p>
            <p id="status">status: {option}</p>
            <h4>Description: </h4>
            <p>This is a task,This is a task,This is a task,This is a task... </p>
            <select name="" id="" onChange={change}>
                <option value="NEW">NEW</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>
        </div>
        
    </div>
  );
}

export default Card;
