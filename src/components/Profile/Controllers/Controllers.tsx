import { useTranslation } from 'react-i18next';
import { MdEmail } from 'react-icons/md';
import { RiLockFill, RiEdit2Fill, RiSettings4Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoMdExit } from 'react-icons/io';
import useModalWindow from 'hooks/useModalWindow';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import useLogout from 'hooks/useLogout';
import { Item, Label } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const { modalsName, openModal } = useModalWindow();
  const { t } = useTranslation();
  const { logout } = useLogout();

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
      <Item onClick={() => openModal(modalsName.calculationSetup)}>
        <RiSettings4Fill />
        <Label>{t(CommonLngKeys.Settings, { ns: LocalesKeys.common })}</Label>
      </Item>
      <Item onClick={logout}>
        <IoMdExit />
        <Label>{t(CommonLngKeys.Exit, { ns: LocalesKeys.common })}</Label>
      </Item>
    </ul>
  );
};

export default Controllers;
