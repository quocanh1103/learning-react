import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

Form.propTypes = {};

function Form(props) {
  const myData = localStorage.getItem("Form")
    ? JSON.parse(localStorage.getItem("Form"))
    : [];

  const defaultValue = {
    id: uuidv4(),
    name: "",
    price: "",
    image: "",
  };
  const [formValue, setFormValue] = useState(defaultValue);

  const handleOnChange = (e) => {
    setFormValue((formValue) => ({
      ...formValue,
      [e.target.name]: e.target.value,
    }));
  };
  let Navigate = useNavigate();
  const handleCreateCard = (event) => {
    event.preventDefault();
    myData.push(formValue);
    
    localStorage.setItem("Form", JSON.stringify(myData));
    let path = "/products";
    Navigate(path);
  };
  const handleReset = (e) => {
    setFormValue(defaultValue);
  };
  return (
    <div className="container-parents">
      <form className="container" onSubmit={handleCreateCard}>
        <h1>Add New Product</h1>
        <label htmlFor="Name">Name :</label>
        <input
          type="text"
          id="name"
          value={formValue.name}
          name="name"
          onChange={handleOnChange}
          required
        />
        <br></br>
        <label htmlFor="Price">Price :</label>
        <input
          type="number"
          id="price"
          value={formValue.price}
          name="price"
          onChange={handleOnChange}
          required
        />
        <br></br>
        <label htmlFor="Image">Image :</label>
        <input
          type="url"
          id="image"
          value={formValue.image}
          name="image"
          onChange={handleOnChange}
          required
        />
        <br></br>
        <input type="submit" value="Save" id="BtnSubmit" />
        <input type="reset" value="Reset" id="BtnReset" onClick={handleReset} />
      </form>
    </div>
  );
}

export default Form;
