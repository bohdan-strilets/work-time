import { TextareaProps } from 'types/props/TextareaProps';
import { Wrapper, Label, Required, Input, Error } from './Textarea.styled';

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder,
  required,
  disabled,
  register,
  errors,
  width,
  height,
  margin,
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
      <Input
        name={name}
        {...register(name, { required: required, disabled: disabled })}
        placeholder={placeholder}
        height={height}
        defaultValue={defaultValue}
      />
      {errors[name] && <Error>{errors[name].message}</Error>}
    </Wrapper>
  );
};

export default Textarea;
