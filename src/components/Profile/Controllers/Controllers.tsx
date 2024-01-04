import { useTranslation } from 'react-i18next';
import { MdEmail } from 'react-icons/md';
import { RiLockFill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import useModalWindow from 'hooks/useModalWindow';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Item, Label } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const { modalsName, openModal } = useModalWindow();
  const { t } = useTranslation();

  return (
    <ul>
      <Item onClick={() => openModal(modalsName.editEmail)}>
        <MdEmail />
        <Label>{t(TranslationKeys.ChangedEmail)}</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.editPassword)}>
        <RiLockFill />
        <Label>{t(TranslationKeys.ChangedPassword)}</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.editProfile)}>
        <RiEdit2Fill />
        <Label>{t(TranslationKeys.EditProfile)}</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.deleteProfile)}>
        <RiDeleteBin6Fill />
        <Label>{t(TranslationKeys.DeleteProfile)}</Label>
      </Item>
    </ul>
  );
};

export default Controllers;
