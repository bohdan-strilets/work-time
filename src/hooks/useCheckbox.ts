import { useState, useEffect } from "react";
import { HookProps } from "types/props/CheckboxProps";

const useCheckbox = ({ onChange, defaultValue }: HookProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onChange(isChecked);
  }, [isChecked, onChange]);

  useEffect(() => {
    if (defaultValue) {
      setIsChecked(defaultValue);
    }
  }, [defaultValue]);

  const toggle = () => setIsChecked((state) => !state);

  return { isChecked, toggle };
};

export default useCheckbox;
