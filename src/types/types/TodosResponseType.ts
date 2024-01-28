import { TodoType } from './TodoType';

export type TodosResponseType<T = TodoType | TodoType[]> = {
  status: string;
  code: number;
  success: boolean;
  message?: string;
  data?: T;
};
