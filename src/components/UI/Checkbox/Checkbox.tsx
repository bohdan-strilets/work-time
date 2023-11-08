import { HiCheck } from "react-icons/hi";
import { CheckboxProps } from "types/props/CheckboxProps";
import useCheckbox from "hooks/useCheckbox";
import {
  Wrapper,
  Input,
  CustomCheckbox,
  Label,
  Error,
} from "./Checkbox.styled";

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  margin,
  required,
  disabled,
  register,
  errors,
  onChange,
  children,
  defaultValue,
}) => {
  const { isChecked, toggle } = useCheckbox({ onChange, defaultValue });

  return (
    <Wrapper margin={margin}>
      <Input
        type="checkbox"
        name={name}
        checked={isChecked}
        {...register(name)}
        required={required}
        disabled={disabled}
        onClick={toggle}
      />
      <CustomCheckbox
        checked={isChecked}
        disabled={disabled}
        className="checkbox"
      >
        {isChecked && <HiCheck size={20} />}
      </CustomCheckbox>
      {children && !label && children}
      {label && !children && <Label>{label}</Label>}
      {errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default Checkbox;
