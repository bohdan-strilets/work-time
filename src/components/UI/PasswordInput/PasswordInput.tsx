import { useState } from 'react';
import { IoMdEye, IoIosEyeOff } from 'react-icons/io';
import TextInput from '../TextInput';
import { PasswordInputProps } from 'types/props/PasswordInputProps';
import { Button } from './PasswordInput.styled';

const PasswordInput: React.FC<PasswordInputProps> = ({
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
}) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  const toggle = () => {
    type === 'password' ? setType('text') : setType('password');
  };

  return (
    <TextInput
      type={type}
      label={label}
      icon={icon}
      name={name}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      register={register}
      errors={errors}
      width={width}
      height={height}
      margin={margin}
    >
      <Button type="button" onClick={toggle}>
        {type === 'password' ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
      </Button>
    </TextInput>
  );
};

export default PasswordInput;
