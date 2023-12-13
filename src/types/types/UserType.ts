import { CompanyInfoType } from './CompanyInfoType';
import { Gender } from 'types/enums/GenderEnum';

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
  createdAt: Date;
  updatedAt: Date;
};
