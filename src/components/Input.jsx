import { useRef, useState } from "react";
import ValidatorInfo from "./ValidatorInfo"; 
import './Input.css'
export default function Input() {
  const [val, setVal] = useState('');
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    setVal(inputRef.current.value);
  }

  return (
    <div className="enterInput">
      <h3>Enter the amount of token you wish to stake</h3>
      <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Calculate</button>
      </form>
      <ValidatorInfo value={val}></ValidatorInfo>
    </div>
  );
}