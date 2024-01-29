import { useEffect } from 'react';
import { HiCheck } from 'react-icons/hi';
import { CheckboxProps } from 'types/props/CheckboxProps';
import useCheckbox from 'hooks/useCheckbox';
import { Wrapper, Input, CustomCheckbox, ChildrenWrapper, Label, Error } from './Checkbox.styled';

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
  childrenWidth,
  defaultValue,
  readOnly,
}) => {
  const { isChecked, toggle } = useCheckbox({ onChange, defaultValue });

  useEffect(() => {
    if (register && name) register(name, { required });
  }, [register, name, required]);

  return (
    <Wrapper margin={margin}>
      <Input
        type="checkbox"
        name={name}
        checked={isChecked}
        required={required}
        disabled={disabled}
        onClick={toggle}
        readOnly={readOnly}
        {...(register && name ? register(name) : {})}
      />
      <CustomCheckbox checked={isChecked} disabled={disabled} className="checkbox">
        {isChecked && <HiCheck size={20} />}
      </CustomCheckbox>
      {children && !label && (
        <ChildrenWrapper childrenWidth={childrenWidth}>{children}</ChildrenWrapper>
      )}
      {label && !children && <Label>{label}</Label>}
      {errors && errors[name] && <Error role="alert">{errors[name]?.message}</Error>}
    </Wrapper>
  );
};

export default Checkbox;
