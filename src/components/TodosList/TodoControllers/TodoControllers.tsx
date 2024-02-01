import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import useModalWindow from 'hooks/useModalWindow';
import { TodoControllerProps } from 'types/props/TodoControllerProps';
import { List, Item, Button } from './TodoControllers.styled';

const TodoControllers: React.FC<TodoControllerProps> = ({ todoId, getTodoId }) => {
  const { openModal, modalsName } = useModalWindow();

  const handleDeleteBtnClick = () => {
    openModal(modalsName.deleteTodo);
    getTodoId(todoId);
  };

  const handleEditBtnClick = () => {
    openModal(modalsName.editTodo);
    getTodoId(todoId);
  };

  return (
    <List>
      <Item>
        <Button type="button" onClick={handleDeleteBtnClick}>
          <MdDelete />
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={handleEditBtnClick}>
          <RiEdit2Fill />
        </Button>
      </Item>
    </List>
  );
};

export default TodoControllers;
