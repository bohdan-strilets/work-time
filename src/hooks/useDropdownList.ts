import { useState, useEffect } from 'react';
import useClickOutside from './useClickOutside';
import { UseDropdownListData } from 'types/props/DropdownListProps';

const useDropdownList = ({ onChange, options, defaultValue, type }: UseDropdownListData) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>(null);
  const { isOpen, toggle, divRef } = useClickOutside();

  useEffect(() => {
    if (defaultValue) {
      const defaultValues = options
        .filter(item => defaultValue.includes(item.value))
        .map(item => item.value);

      if (type === 'single') {
        defaultValues.length === 1 && setSelectedOption(defaultValues[0]);
      } else if (type === 'multiselect') {
        defaultValues.length > 0 && setSelectedOptions(defaultValues);
      }
    } else if (type === 'multiselect') {
      setSelectedOptions([]);
    }
  }, [defaultValue, options, type]);

  const selectOption = (option: string) => {
    if (selectedOption === null || selectedOption !== option) {
      setSelectedOption(option);
      onChange(option);
    } else {
      setSelectedOption(null);
    }
    toggle();
  };

  const selectManyOptions = (option: string) => {
    setSelectedOptions(prevSelected => {
      if (prevSelected?.includes(option)) {
        const result = prevSelected.filter(item => item !== option);
        onChange(result);
        return result;
      } else {
        if (prevSelected !== null) {
          const result = [...prevSelected, option];
          onChange(result);
          return result;
        }
        return [option];
      }
    });
  };

  const getLabelByValue = (value: string) => {
    const option = options.find(item => item.value === value);
    return option?.label;
  };

  return {
    divRef,
    toggle,
    isOpen,
    selectedOption,
    selectedOptions,
    getLabelByValue,
    selectOption,
    selectManyOptions,
  };
};

export default useDropdownList;
