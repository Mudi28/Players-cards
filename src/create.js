
import './create.css';

import { useState, useRef } from "react";
import Input from './data/input';

function () {
    const [formValues, setFormValues] = useState([]);
    const [toggle, setToggle] = useState(false);
  
    const inputRef = useRef();
    const selectRef = useRef();
  
    const handleChange = (e, index) => {
      const values = [...formValues];
      values[index].value = e.target.value;
      setFormValues(values);
    };
  
    const handleAddField = (e) => {
      e.preventDefault();
      const values = [...formValues];
      values.push({
        name: inputRef.current.value || "name",
        team: selectRef.current.value || "team",
        value: "",
      });
      setFormValues(values);
      setToggle(false);
    };

    const handleDeleteField = (e, index) => {
        const values = [...formValues];
        values.splice(index, 1);
        setFormValues(values);
      };
    
  
    const addBtnClick = (e) => {
      e.preventDefault();
      setToggle(true);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
          formValues.map((val) => {
            return { [val.name]: val.name };
          })
        );
      };

  return (
    <div className="s">
      <form onSubmit={handleSubmit}>
        {formValues.map((obj, index) => (
          <Input
            key={index}
            objValue={obj}
            onChange={handleChange}
            index={index}
            // Add this
            deleteField={handleDeleteField}
          />
        ))}

            {!toggle ? (
          <div className="center">
            <button className="add-btn" onClick={addBtnClick}>
              Add new
            </button>
          </div>
        ) : (
          <div className="dialog-box">
            <input type="text" placeholder="label" ref={inputRef} />
            <select ref={selectRef}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
            </select>
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}
        
        <button type="submit"  className="submit-btn">
            
          Submit
        </button>
      </form>
    </div>
  );
}
