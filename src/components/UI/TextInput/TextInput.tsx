import { TextInputProps } from 'types/props/TextInputProps';
import { Wrapper, Label, Required, InputWrapper, Icon, Input, Error } from './TextInput.styled';

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  icon,
  name,
  placeholder,
  required,
  disabled,
  register,
  errors,
  width,
  height,
  margin,
  children,
  defaultValue,
  padding,
  minValue,
  maxValue,
  step,
}) => {
  return (
    <Wrapper width={width} margin={margin} disabled={disabled}>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      <InputWrapper>
        {icon && <Icon className="icon">{icon}</Icon>}
        <Input
          type={type}
          name={name}
          {...(register && name ? register(name, { required: required, disabled: disabled }) : {})}
          placeholder={placeholder}
          height={height}
          icon={icon}
          defaultValue={defaultValue}
          padding={padding}
          min={minValue}
          max={maxValue}
          step={step}
        />
        {children && children}
      </InputWrapper>
      {errors && errors[name] && <Error>{errors[name].message}</Error>}
    </Wrapper>
  );
};

export default TextInput;
