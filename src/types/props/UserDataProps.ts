export type UserDataProps = {
  name: string;
  isActivateed: boolean;
  email?: string;
  gender?: string;
  dateBirth?: string;
  workInfo: {
    companyName?: string;
    profession?: string;
    startWork?: string;
    endWork?: string;
    salaryPerHour?: number;
  };
};

export type StatusProps = Pick<UserDataProps, 'isActivateed'>;
