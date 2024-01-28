export type Dto = {
  task?: string;
  priority?: string;
  isCompleted?: boolean;
};

export type UpdateTodoDto = {
  todoId: string;
  updateTodoDto: Dto;
};
