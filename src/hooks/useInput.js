import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clearInput = () => {
    setValue("");
    console.log("chau");
  };

  return { value, onChange, clearInput };
}

export default useInput;
