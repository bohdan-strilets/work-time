import { CalculationSetupType } from 'types/types/CalculationSetupType';

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
  userId: string;
  description: string;
  settings?: CalculationSetupType;
};

export type StatusProps = { value?: boolean };
