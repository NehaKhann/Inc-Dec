import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import "./styles.css";

export default function App() {
  let [num, setnum] = useState(0);
  const Increment = () => {
    setnum(num + 1);
  };
  const Decrement = () => {
    if (num > 0) {
      return setnum(num - 1);
    } else {
      alert("Zero is reached");
    }
  };
  return (
    <div className="App">
      <h1>{num}</h1>
      <Button onClick={Increment} color="primary">
        <Tooltip title="Increment">
          <AddIcon />
        </Tooltip>
      </Button>

      <Button onClick={Decrement} color="secondary">
        <Tooltip title="Decrement">
          <DeleteRoundedIcon />
        </Tooltip>
      </Button>
    </div>
  );
}
