import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import useModalWindow from 'hooks/useModalWindow';
import { List, Item, Button } from './TodoControllers.styled';

const TodoControllers: React.FC<{}> = () => {
  const { openModal, modalsName } = useModalWindow();

  return (
    <List>
      <Item>
        <Button type="button" onClick={() => openModal(modalsName.deleteTodo)}>
          <MdDelete />
        </Button>
      </Item>
      <Item>
        <Button type="button">
          <RiEdit2Fill />
        </Button>
      </Item>
    </List>
  );
};

export default TodoControllers;
