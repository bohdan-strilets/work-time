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
          {...register(name, { required: required, disabled: disabled })}
          placeholder={placeholder}
          height={height}
          icon={icon}
          defaultValue={defaultValue}
        />
        {children && children}
      </InputWrapper>
      {errors[name] && <Error>{errors[name].message}</Error>}
    </Wrapper>
  );
};

export default TextInput;
