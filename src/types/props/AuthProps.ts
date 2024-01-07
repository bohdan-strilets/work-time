import { AuthEnum } from 'types/enums/AuthEnum';

export type LeftSideProps = {
  registrationUrl: string;
  loginUrl: string;
  type: AuthEnum;
};

export type TitleProps = { fontSize: number; color: string };

export type RightSideProps = { type: AuthEnum };
