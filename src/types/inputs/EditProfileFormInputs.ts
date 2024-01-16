import { Gender } from 'types/enums/GenderEnum';

export type EditProfileFormInputs = {
  firstName?: string | null;
  lastName?: string | null;
  gender?: Gender | null;
  description?: string | null;
  dateBirth?: Date | null;
  companyName?: string | null;
  profession?: string | null;
  startWork?: Date | null;
  salaryPerHour?: number | null;
};
