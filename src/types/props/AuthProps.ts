import { AuthType } from "types/types/AuthTypes";

export type LeftSideProps = {
  registrationUrl: string;
  loginUrl: string;
  type: AuthType;
};

export type TitleProps = { fontSize: number; color: string };

export type RightSideProps = { type: AuthType };
