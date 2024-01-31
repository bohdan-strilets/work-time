import PriorityEnum from 'types/enums/PriorityEnum';

export type TodoListProps = {
  getTodoId: (todoId: string) => void;
};

export type ImageProps = {
  background: string;
};

export type PriorityProps = {
  priority: PriorityEnum;
};
