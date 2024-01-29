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
import { List, Item, Text } from './TodoList.styled';

const TodoList: React.FC<TodoListProps> = ({ dayId }) => {
  const { t } = useTranslation();
  const { openModal, modalsName } = useModalWindow();
  const { data, isLoading } = useGetTodosByDateQuery(dayId ?? '');
  const [updateCompleted] = useUpdateCompletedMutation();
  const todos = data?.data;

  const handleTodoChange = (value: boolean, todoId: string) => {
    const dto = { todoId, updateCompletedDto: { isCompleted: value } };
    updateCompleted(dto);
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
      <List>
        {todos &&
          todos?.length > 0 &&
          todos.map((item, index) => (
            <Item key={item._id}>
              <Checkbox
                name={`task${index}`}
                onChange={value => handleTodoChange(value, item._id)}
                defaultValue={item.isCompleted}
                readOnly={true}
              >
                <Text>{item.task}</Text>
              </Checkbox>
            </Item>
          ))}
      </List>
    </>
  );
};

export default TodoList;
