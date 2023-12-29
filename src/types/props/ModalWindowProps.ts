import { ThemeEnum } from 'types/enums/ThemeEnum';

export type ModalWindowProps = {
  title: string;
  children: React.ReactNode;
};

export type HeaderProps = {
  theme: ThemeEnum;
};

export type TitleProps = {
  theme: ThemeEnum;
};
