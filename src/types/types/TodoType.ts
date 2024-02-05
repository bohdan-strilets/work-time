import PriorityEnum from 'types/enums/PriorityEnum';

export type TodoType = {
  _id: string;
  owner: string;
  dayId: string;
  task: string;
  priority: PriorityEnum;
  isCompleted: boolean;
  appointmentDate: Date;
  createdAt: Date;
  updatedAt: Date;
};
