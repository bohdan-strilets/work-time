import { MdEmail } from 'react-icons/md';
import { RiLockFill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import useModalWindow from 'hooks/useModalWindow';
import { Item, Label } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const { modalsName, openModal } = useModalWindow();

  return (
    <ul>
      <Item onClick={() => openModal(modalsName.editEmail)}>
        <MdEmail />
        <Label>Changed email</Label>
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
