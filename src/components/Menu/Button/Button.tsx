import { ButtonProps } from 'types/props/MenuButtonProps';
import { Wrapper, Label } from './Button.styled';

const Button: React.FC<ButtonProps> = ({ label, icon, handleClick, width, height, margin }) => {
  return (
    <Wrapper type="button" width={width} height={height} margin={margin} onClick={handleClick}>
      {label && <Label>{label}</Label>}
      {icon}
    </Wrapper>
  );
};

export default Button;
