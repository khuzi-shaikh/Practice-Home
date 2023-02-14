import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const ToDoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const handleButton = () => {
    if (text.trim() != "") {
      setData([...data, text]);
      setCopyData([...data, text]);
    }
    setText("");
  };
  const handleDelete = (item) => {
    const deleteText = data.filter((ele) => ele !== item);
    setData(deleteText);
  };
  const handleFilter = (value) => {
    const searchData = copyData.filter((item) =>
      item.toUpperCase().includes(value.toUpperCase())
    );
    setData(searchData);
    console.log(searchData);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="Search Bar"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <span> </span>
      <TextField
        id="standard-basic"
        label="Enter Value"
        variant="standard"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <span> </span>
      <Button id="Button" onClick={handleButton}>
        Add
      </Button>
      <ul>
        {data.map((item) => {
          return (
            <div>
              <li>
                {item}
                <span> </span>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </Button>
              </li>
              <button onClick={() => setText(item)}>Edit</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
