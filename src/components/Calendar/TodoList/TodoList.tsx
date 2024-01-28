import { useTranslation } from 'react-i18next';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import Loader from 'components/UI/Loader';
import { useGetTodosByDateQuery } from '../../../redux/todo/todoApi';
import { TodoListProps } from 'types/props/TodoListProps';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { List, Item, Text } from './TodoList.styled';

const TodoList: React.FC<TodoListProps> = ({ dayId }) => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetTodosByDateQuery(dayId ?? '');
  const todos = data?.data;

  return (
    <>
      <Button
        type="button"
        height="35px"
        width="100%"
        label={t(CalendarLngKeys.PlanYourDay, { ns: LocalesKeys.calendar })}
        margin="var(--medium-indent) 0 var(--small-indent) 0"
      />
      {isLoading && <Loader />}
      <List>
        {todos &&
          todos?.length > 0 &&
          todos.map(item => (
            <Item>
              <Checkbox name="Field1" onChange={value => console.log(value)}>
                <Text>{item.task}</Text>
              </Checkbox>
            </Item>
          ))}
      </List>
    </>
  );
};

export default TodoList;
