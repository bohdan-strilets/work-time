export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  width?: string;
  height?: string;
  margin?: string;
};

export type WrapperProps = Pick<
  ButtonProps,
  "width" | "height" | "margin" | "disabled"
>;
