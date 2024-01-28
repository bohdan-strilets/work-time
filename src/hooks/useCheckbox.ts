import { useState, useEffect } from 'react';
import { HookProps } from 'types/props/CheckboxProps';

const useCheckbox = ({ onChange, defaultValue }: HookProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      setIsChecked(defaultValue);
    }
  }, [defaultValue]);

  const toggle = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return { isChecked, toggle };
};

export default useCheckbox;
