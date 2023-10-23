export type LeftSideProps = {
  registrationUrl: string;
  loginUrl: string;
  type: "registration" | "login";
};

export type TitleProps = { fontSize: number; color: string };

export type RightSideProps = { type: "registration" | "login" };
