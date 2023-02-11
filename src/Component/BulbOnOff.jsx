import { Button } from "@mui/material";
import React, { useState } from "react";

export const BulbOnOff = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    // setInterval(() => {
      setToggle(!toggle);
    // }, 1000);
  };
  return (
    <div className="div">
      <br />
      <br />
      <br />
      <br />
      <img src={`./image/bulb_${toggle ? "on" : "off"}.png`} />
      <Button
        onClick={toggleButton}
        style={{
          backgroundColor: toggle ? "green" : "red",
          color: "black",
        }}
        variant="contained"
        color="error"
      >
        {toggle ? "on" : "off"}
      </Button>
    </div>
  );
};
