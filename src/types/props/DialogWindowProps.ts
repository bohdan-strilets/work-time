export type DialogWindowProps = {
  text?: string;
  positiveBtnLabel: string;
  negativeBtnLabel: string;
  handlePositiveClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleNegativeClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
