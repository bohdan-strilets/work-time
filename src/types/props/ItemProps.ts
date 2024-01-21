import { Gender } from 'types/enums/GenderEnum';

export type ItemProps = {
  avatarUrl: string | null;
  name: string;
  userId: string;
  gender: Gender;
  dateBirth: Date;
  registrationDate: Date;
  startWorkDate: Date;
  companyName: string | null;
  profession: string | null;
  numberWorkingHours: number;
  description: string | null;
};
