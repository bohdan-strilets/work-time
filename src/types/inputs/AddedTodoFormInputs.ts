import PriorityEnum from 'types/enums/PriorityEnum';

export type AddedTodoFormInputs = {
  task: string;
  priority?: PriorityEnum;
};
