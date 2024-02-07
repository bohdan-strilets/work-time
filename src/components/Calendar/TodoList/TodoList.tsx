import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import Loader from 'components/UI/Loader';
import { useGetTodosByDateQuery } from '../../../redux/todo/todoApi';
import { TodoListProps } from 'types/props/TodoListProps';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import useModalWindow from 'hooks/useModalWindow';
import { useUpdateCompletedMutation } from '../../../redux/todo/todoApi';
import { TodosResponseType } from 'types/types/TodosResponseType';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import { Item } from './TodoList.styled';

const TodoList: React.FC<TodoListProps> = ({ dayId }) => {
  const { t } = useTranslation();
  const { openModal, modalsName } = useModalWindow();
  const { data, isLoading } = useGetTodosByDateQuery(dayId ?? '');
  const [updateCompleted, { isLoading: isUpdateLoading }] = useUpdateCompletedMutation();
  const todos = data?.data;

  const handleTodoChange = async (value: boolean, todoId: string) => {
    const dto = { todoId, updateCompletedDto: { isCompleted: value } };
    await updateCompleted(dto);
    try {
      toast.success(
        t(TodosLngKeys.TaskStatusHasBeenSuccessfullyUpdated, { ns: LocalesKeys.todos }),
      );
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<TodosResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as TodosResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(t(ErrorLngKeys.GeneralAxiosError, { ns: LocalesKeys.error }));
        }
      } else {
        toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
      }
    }
  };

  return (
    <>
      <Button
        type="button"
        height="35px"
        width="100%"
        label={t(TodosLngKeys.PlanYourDay, { ns: LocalesKeys.todos })}
        margin="var(--medium-indent) 0 var(--small-indent) 0"
        onClick={() => openModal(modalsName.cellDayNewTodo)}
      />
      {isLoading && <Loader />}
      <ul>
        {todos &&
          todos?.length > 0 &&
          todos.map((item, index) => (
            <Item key={item._id} isCompleted={item.isCompleted}>
              <Checkbox
                name={`task${index}`}
                onChange={value => handleTodoChange(value, item._id)}
                defaultValue={item.isCompleted}
                readOnly={true}
                disabled={isUpdateLoading}
              >
                <p>{item.task}</p>
              </Checkbox>
            </Item>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
