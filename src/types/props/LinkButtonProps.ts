export type LinkButtonProps = {
  children: string;
  margin?: string;
  onClick?: () => void;
};

export type ButtonProps = Pick<LinkButtonProps, 'margin'>;
