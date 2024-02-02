import { useState, useEffect, useCallback } from 'react';
import { HookProps } from 'types/props/CheckboxProps';

const useCheckbox = ({ onChange, defaultValue }: HookProps) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (defaultValue !== undefined) setIsChecked(defaultValue);
  }, [defaultValue]);

  const toggle = useCallback(() => {
    setIsChecked(prevState => !prevState);
    onChange && onChange(!isChecked);
  }, [isChecked, onChange]);

  return { isChecked, toggle };
};

export default useCheckbox;
