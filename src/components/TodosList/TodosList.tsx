import Loader from 'components/UI/Loader';
import Todo from './Todo/Todo';
import Placeholder from 'components/Placeholder';
import { useGetAllTodoQuery } from '../../redux/todo/todoApi';
import { TodoListProps } from 'types/props/ExtendedTodoListProps';
import { List } from './TodosList.styled';

const TodosList: React.FC<TodoListProps> = ({ getTodoId }) => {
  const { data, isLoading } = useGetAllTodoQuery();
  const todos = data?.data;

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {todos && todos.length > 0 ? (
          todos.map(item => (
            <Todo
              key={item._id}
              _id={item._id}
              task={item.task}
              priority={item.priority}
              isCompleted={item.isCompleted}
              updatedAt={item.updatedAt}
              getTodoId={getTodoId}
              appointmentDate={item.appointmentDate}
            />
          ))
        ) : (
          <Placeholder />
        )}
      </List>
    </>
  );
};

export default TodosList;
