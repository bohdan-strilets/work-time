import { useState, useEffect } from "react";
import useClickOutside from "./useClickOutside";
import usePressEscClose from "./usePressEscClose";
import { UseDropdownListData } from "types/props/DropdownListProps";

const useDropdownList = ({
  onChange,
  options,
  defaultValue,
  type,
}: UseDropdownListData) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>(null);
  const { isOpen, toggle, divRef } = useClickOutside();
  usePressEscClose({ isOpen, toggle });

  useEffect(() => {
    if (defaultValue) {
      const defaultValues = options
        .filter((item) => defaultValue.includes(item.value))
        .map((item) => item.value);

      if (type === "single") {
        defaultValues.length === 1 && setSelectedOption(defaultValues[0]);
      } else if (type === "multiselect") {
        defaultValues.length > 0 && setSelectedOptions(defaultValues);
      }
    } else if (type === "multiselect") {
      setSelectedOptions([]);
    }
  }, [defaultValue, options, type]);

  useEffect(() => {
    if (selectedOption !== null) {
      onChange(selectedOption);
    }
  }, [onChange, selectedOption]);

  useEffect(() => {
    if (selectedOptions !== null) {
      onChange(selectedOptions);
    }
  }, [onChange, selectedOptions]);

  const selectOption = (option: string) => {
    selectedOption === null || selectedOption !== option
      ? setSelectedOption(option)
      : setSelectedOption(null);
    toggle();
  };

  const selectManyOptions = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected?.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        if (prevSelected !== null) {
          return [...prevSelected, option];
        }
        return [option];
      }
    });
  };

  const getLabelByValue = (value: string) => {
    const option = options.find((item) => item.value === value);
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
