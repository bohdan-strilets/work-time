import Gender from 'types/enums/GenderEnum';

export type ChangeProfileDto = {
  firstName?: string | null;
  lastName?: string | null;
  dateBirth?: Date | null;
  gender?: Gender | null;
  description?: string | null;
  companyInfo?: {
    companyName?: string | null;
    profession?: string | null;
    startWork?: Date | null;
    salaryPerHour?: number | null;
  };
};
