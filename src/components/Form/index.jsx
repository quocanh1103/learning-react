import React from "react";
import { useState } from "react";
import { json } from "react-router-dom";
import Card from "../card";

import "./index.css";

Form.propTypes = {};


function Form() {
  
  let initId = 0;
  const [formValue, setFormValue] = useState({
    id: 1,
    title: "",
    creator: "",
    description: "",
    status: "NEW",
  });
  const handlechangefile = (event) =>{
    setFormValue({
      ...formValue,
      id: initId + 1,
      [event.target.name] : event.target.value,
    });
  };
  
  const handleSave = (e) => {
    e.preventDefault();
    let myData = JSON.parse(localStorage.getItem('data_Form'));
    myData.push(formValue);
    localStorage.setItem('data_Form', JSON.stringify(myData));
  };

  return (
    <div>
      <form action="" onSubmit={handleSave}>
        <div id="handleForm">
          <label htmlFor="">Title: </label>
          <input type="text" name="title" id="" value={formValue.title} onChange={handlechangefile} />
        </div>
        <div id="handleForm">
          <label htmlFor="">Creator: </label>
          <input type="text" name="creator" id="" value={formValue.creator} onChange={handlechangefile} />
        </div>
        <div id="handleForm">
          <label htmlFor="">Description: </label>
          <input type="text" name="description" id="" value={formValue.description} onChange={handlechangefile} placeholder='type something' />
        </div>
        <select name="status" id="" value={formValue.status} onChange={handlechangefile}>
                <option value="NEW">NEW</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
            </select>
        <input type="submit" name="" id="" value='save'/>
      </form>
    </div>
  );
};

export default Form;
