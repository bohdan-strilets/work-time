import PriorityEnum from 'types/enums/PriorityEnum';

export type EditTodoFormProps = {
  todoId: string;
  task: string;
  priority: PriorityEnum;
};

export type HookProps = Pick<EditTodoFormProps, 'todoId'>;
