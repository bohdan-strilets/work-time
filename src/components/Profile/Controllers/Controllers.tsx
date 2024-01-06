import { useTranslation } from 'react-i18next';
import { MdEmail } from 'react-icons/md';
import { RiLockFill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import useModalWindow from 'hooks/useModalWindow';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { Item, Label } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const { modalsName, openModal } = useModalWindow();
  const { t } = useTranslation();

  return (
    <ul>
      <Item onClick={() => openModal(modalsName.editEmail)}>
        <MdEmail />
        <Label>{t(ProfileLngKeys.ChangedEmail, { ns: LocalesKeys.profile })}</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.editPassword)}>
        <RiLockFill />
        <Label>{t(ProfileLngKeys.ChangedPassword, { ns: LocalesKeys.profile })}</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.editProfile)}>
        <RiEdit2Fill />
        <Label>{t(ProfileLngKeys.EditProfile, { ns: LocalesKeys.profile })}</Label>
      </Item>
      <Item onClick={() => openModal(modalsName.deleteProfile)}>
        <RiDeleteBin6Fill />
        <Label>{t(ProfileLngKeys.DeleteProfile, { ns: LocalesKeys.profile })}</Label>
      </Item>
    </ul>
  );
};

export default Controllers;
