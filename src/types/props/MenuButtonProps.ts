export type ButtonProps = {
  label?: string;
  icon?: React.ReactNode;
  handleClick?: () => void;
  width?: number;
  height?: number;
  margin?: string;
};

export type ButtonStyledProps = Pick<ButtonProps, 'width' | 'height' | 'margin'>;
