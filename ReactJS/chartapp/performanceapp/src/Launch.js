import { useState, useMemo } from "react";

export function Launch() {
  const [number, setNumber] = useState(0);
  const [enteredName, setEnteredName] = useState("");

  function cube(num) {
    let i = 0;
    let anotherNum;
    while (i < 10000000) {
      anotherNum = num * num * num;
      i++;
    }
    return anotherNum;
  }

  //cache or memoization used for faster processing time
  const result = useMemo(() => {
    return cube(number);
  }, [number]);

  function increaseIt() {
    setNumber(number + 1);
  }

  function decreaseIt() {
    setNumber(number - 1);
  }

  function collectIt(event) {
    // Handle the collection of the entered name here
    setEnteredName(event.target.value);
  }

  return (
    <div>
      <h2>The number is: {number} and its cube is: {result}</h2>
      <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={increaseIt}
      >
        Increase
      </button>
      <button
        className="btn btn-danger"
        style={{ marginRight: "10px" }}
        onClick={decreaseIt}
      >
        Decrease
      </button>
      <br></br>
      <hr></hr>
      <h2>The name is: {enteredName}</h2>
      Enter Name:
      <input type="text" onChange={collectIt} />
    </div>
  );
}
