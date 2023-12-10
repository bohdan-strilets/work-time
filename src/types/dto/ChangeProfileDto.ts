import Gender from 'types/enums/GenderEnum';

export type ChangeProfileDto = {
  firstName?: string;
  lastName?: string;
  dateBirth?: Date;
  gender?: Gender;
  description?: string;
  companyInfo?: {
    companyName?: string;
    profession?: string;
    startWork?: Date;
    salaryPerHour: number;
  };
};
