import { ThemeEnum } from 'types/enums/ThemeEnum';

export type MenuProps = {
  closeMenu: () => void;
  handleBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleStartClick: () => void;
};

export type ContentProps = {
  theme: ThemeEnum;
};
