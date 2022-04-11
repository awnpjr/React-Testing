import { useState } from "react";

export const UseInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value || e.target.innerText);
    },
  };
};
