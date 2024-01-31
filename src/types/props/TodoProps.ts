import PriorityEnum from 'types/enums/PriorityEnum';

export type TodoProps = {
  _id: string;
  task: string;
  priority: PriorityEnum;
  isCompleted: boolean;
  updatedAt: Date;
  getTodoId: (todoId: string) => void;
};
