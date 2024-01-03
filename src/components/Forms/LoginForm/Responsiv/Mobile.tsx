import { useTranslation } from 'react-i18next';
import { BiSolidLock } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import PasswordInput from 'components/UI/PasswordInput';
import GoogleAuthBtn from 'components/UI/GoogleAuthBtn';
import LineWithText from 'components/UI/LineWithText';
import LinkButton from 'components/UI/LinkButton';
import useLoginForm from 'hooks/useLoginForm';
import useModalWindow from 'hooks/useModalWindow';
import { TranslationKeys } from 'types/enums/TranslationKeys';

const Mobile: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();
  const { openModal, modalsName } = useModalWindow();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        icon={<MdMail size={16} />}
        name="email"
        placeholder={t(TranslationKeys.Email)}
        required={true}
        register={register}
        errors={errors}
        width={300}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <PasswordInput
        icon={<BiSolidLock size={16} />}
        name="password"
        placeholder={t(TranslationKeys.PasswordPlaceholder)}
        required={true}
        register={register}
        errors={errors}
        width={300}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        padding="0 45px 0 35px"
      />

      <Button
        type="submit"
        label={t(TranslationKeys.Login)}
        width="300px"
        height="40px"
        margin="0 0 var(--small-indent) 0"
      />
      <LinkButton onClick={() => openModal(modalsName.requestPasswordReset)}>
        {`${t(TranslationKeys.ForgotYourPassword)}?`}
      </LinkButton>
      <LineWithText label={t(TranslationKeys.UseGoogle)} />
      <GoogleAuthBtn width={300} />
    </form>
  );
};

export default Mobile;
