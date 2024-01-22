import { CompanyInfoType } from './CompanyInfoType';
import { Gender } from 'types/enums/GenderEnum';
import { StatisticsType } from './StatisticsType';
import { CalculationSetupType } from './CalculationSetupType';

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string | null;
  dateBirth: Date;
  gender: Gender;
  description: string | null;
  companyInfo: CompanyInfoType;
  avatarUrl: string | null;
  activationToken: string | null;
  isActivated: boolean;
  statistics: StatisticsType;
  settings: CalculationSetupType;
  createdAt: Date;
  updatedAt: Date;
};
