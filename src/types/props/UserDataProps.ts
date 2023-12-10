export type UserDataProps = {
  name: string;
  isActivateed: boolean;
  email?: string;
  gender?: string;
  dateBirth?: string;
  age?: number;
  workInfo: {
    companyName?: string;
    profession?: string;
    startWork?: string;
    workExperience?: number;
    salaryPerHour?: number;
  };
};

export type StatusProps = Pick<UserDataProps, 'isActivateed'>;
