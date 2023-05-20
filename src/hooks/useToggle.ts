import { useState } from "react";

function useToggle(defaultValue: boolean): [boolean, () => void] {
  const [toggle, setToggle] = useState(defaultValue);

  const doToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, doToggle];
}

export default useToggle;
