import { ButtonProps } from "types/props/ButtonProps";
import { Wrapper, Label, Icon } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  icon,
  onClick,
  disabled,
  width,
  height,
  margin,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      disabled={disabled}
      type={type}
      width={width}
      height={height}
      margin={margin}
    >
      {label && <Label>{label}</Label>}
      {icon && <Icon>{icon}</Icon>}
    </Wrapper>
  );
};

export default Button;
