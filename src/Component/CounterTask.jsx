import { Button } from "@mui/material";
import React, { useState } from "react";

export const CounterTask = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    count >= 10 ? setCount(count * 2) : setCount(count + 1);
    // if (count <= 9) {
    //   setCount(count + 1);
    // } else if (count <= 19) {
    //   setCount(count + 10);
    // } else {
    //   setCount(count * 2);
    // }
  };
  const handleDec = () => {
    count > 0 && setCount(count - 1);
    // if (count > 0) {
    //   setCount(count - 1);
    // } else {
    //   setCount(0);
    // }
  };
  return (
    <div>
      <div className="a">
        <h1 className="h">This Is Counter 🔄</h1>
        <br />
        <h2 style={{ color: count > 0 ? "green" : "red" }}>{count}</h2>
        <br />
        <br />
        <Button variant="contained" color="success" onClick={handleInc}>
          +
        </Button>
        <br />
        <br /> <span> </span>
        <Button
          variant="contained"
          disabled={count == 0}
          color="error"
          onClick={handleDec}
        >
          -
        </Button>
        <br />
        <br /> <span> </span>
        <Button
          variant="outlined"
          count
          onClick={() => setCount(0)}
          disabled={count == 0}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
