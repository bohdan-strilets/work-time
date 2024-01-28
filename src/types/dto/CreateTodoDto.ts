export type CreateTodoDto = {
  dayId: string;
  task: string;
  priority?: string;
  isCompleted?: boolean;
};
