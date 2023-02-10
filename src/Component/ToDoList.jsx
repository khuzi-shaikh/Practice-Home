import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const ToDoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleButton = () => {
    if (text.trim() != "") {
      setData([...data, text]);
    }
    setText("");
  };
  const handleDelete = (item) => {
    const deleteText = data.filter((ele) => ele !== item);
    setData(deleteText);
  };
  return (
    <div>
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
          );
        })}
      </ul>
    </div>
  );
};
