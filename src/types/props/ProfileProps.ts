import { CalculationSetupType } from 'types/types/CalculationSetupType';

export type ProfileProps = {
  name: string;
  isActivated: boolean;
  email: string;
  gender: string;
  dateBirth: string;
  age: number;
  companyName: string;
  profession: string;
  startWork: string;
  workExperience: number;
  salaryPerHour: number;
  alt: string;
  avatarUrl: string;
  userId: string;
  description: string;
  settings?: CalculationSetupType;
};
