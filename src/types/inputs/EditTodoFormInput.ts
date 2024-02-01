import { AddedTodoFormInputs } from './AddedTodoFormInputs';

export type EditTodoFormInput = Pick<AddedTodoFormInputs, 'priority' | 'task'>;
