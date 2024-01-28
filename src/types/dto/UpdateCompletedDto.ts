export type Dto = {
  isCompleted?: boolean;
};

export type UpdateCompletedDto = {
  todoId: string;
  updateCompletedDto: Dto;
};
