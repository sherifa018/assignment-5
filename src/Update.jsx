import { useState } from "react";

const Input = () => {
  const [value, setvalue] = useState("");
  const handleInput = (e) => {
    setvalue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <label>Enter any key</label>
      <input type="text" value={value} onChange={handleInput} />
    </div>
  );
};

export default Input;
