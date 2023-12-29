import { ThemeEnum } from 'types/enums/ThemeEnum';
import { MenuProps } from './MenuProps';

export type MobileMenuProps = Pick<MenuProps, 'closeMenu' | 'handleStartClick'>;

export type ContentProps = {
  theme: ThemeEnum;
};
