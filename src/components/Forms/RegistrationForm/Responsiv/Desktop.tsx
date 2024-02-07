import { useTranslation } from 'react-i18next';
import { BiSolidUser, BiSolidLock } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import PasswordInput from 'components/UI/PasswordInput';
import GoogleAuthBtn from 'components/UI/GoogleAuthBtn';
import LineWithText from 'components/UI/LineWithText';
import LinkButton from 'components/UI/LinkButton';
import Loader from 'components/UI/Loader';
import useRegistrationForm from 'hooks/useRegistrationForm';
import useModalWindow from 'hooks/useModalWindow';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const Desktop: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit, Controller, control, isLoading } =
    useRegistrationForm();
  const { modalsName, openModal } = useModalWindow();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="firstName"
        placeholder={t(CommonLngKeys.FirstName, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="lastName"
        placeholder={t(CommonLngKeys.LastName, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="email"
        icon={<MdMail size={18} />}
        name="email"
        placeholder={t(CommonLngKeys.Email, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <PasswordInput
        icon={<BiSolidLock size={18} />}
        name="password"
        placeholder={t(CommonLngKeys.PasswordPlaceholder, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        padding="0 45px 0 35px"
      />
      <PasswordInput
        icon={<BiSolidLock size={18} />}
        name="passwordAgain"
        placeholder={t(CommonLngKeys.PasswordPlaceholder, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        padding="0 45px 0 35px"
      />
      <Controller
        name="rules"
        control={control}
        render={({ field }) => (
          <Checkbox
            name="rules"
            errors={errors}
            register={register}
            required={true}
            onChange={(value: boolean) => field.onChange(value)}
            margin="0 0 var(--small-indent) 0"
            childrenWidth="365px"
          >
            <p>
              {t(AuthLngKeys.IHaveReadThe, { ns: LocalesKeys.auth })}
              <LinkButton onClick={() => openModal(modalsName.termsUseSite)}>
                {t(AuthLngKeys.TermsOfUseOfTheSite, { ns: LocalesKeys.auth })}
              </LinkButton>
              {t(AuthLngKeys.AndThe, { ns: LocalesKeys.auth })}
              <LinkButton onClick={() => openModal(modalsName.privacyPolicy)}>
                {t(AuthLngKeys.PrivacyPolicy, { ns: LocalesKeys.auth })}
              </LinkButton>
              {t(AuthLngKeys.AndAgreeToThem, { ns: LocalesKeys.auth })}
            </p>
          </Checkbox>
        )}
      />
      {isLoading && <Loader />}
      <Button
        type="submit"
        label={t(CommonLngKeys.Registration, { ns: LocalesKeys.common })}
        width="400px"
        height="40px"
        margin="0 0 var(--small-indent) 0"
      />
      <LineWithText label={t(AuthLngKeys.OrUseGoogle, { ns: LocalesKeys.auth })} />
      <GoogleAuthBtn width={400} />
    </form>
  );
};

export default Desktop;
