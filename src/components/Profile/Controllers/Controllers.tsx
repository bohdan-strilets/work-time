import { BsFillImageFill } from 'react-icons/bs';
import { RiLockFill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import useModalWindow from 'hooks/useModalWindow';
import { Item, Label } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const { modalsName, openModal } = useModalWindow();

  return (
    <ul>
      <Item>
        <BsFillImageFill />
        <Label>Changed photo</Label>
      </Item>
      <Item>
        <RiLockFill />
        <Label>Changed password</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.editProfile)}>
        <RiEdit2Fill />
        <Label>Edit profile</Label>
      </Item>
      <Item>
        <RiDeleteBin6Fill />
        <Label>Delete profile</Label>
      </Item>
    </ul>
  );
};

export default Controllers;
