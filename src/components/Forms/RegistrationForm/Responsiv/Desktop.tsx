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
import useRegistrationForm from 'hooks/useRegistrationForm';
import useModalWindow from 'hooks/useModalWindow';
import { TranslationKeys } from 'types/enums/TranslationKeys';

const Desktop: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit, Controller, control } = useRegistrationForm();
  const { modalsName, openModal } = useModalWindow();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="firstName"
        placeholder={t(TranslationKeys.FirstName)}
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
        placeholder={t(TranslationKeys.LastName)}
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
        placeholder={t(TranslationKeys.Email)}
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
        placeholder={t(TranslationKeys.PasswordPlaceholder)}
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
        placeholder={t(TranslationKeys.PasswordPlaceholder)}
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
              {t(TranslationKeys.IHaveReadThe)}
              <LinkButton onClick={() => openModal(modalsName.termsUseSite)}>
                {t(TranslationKeys.TermsOfUseOfTheSite)}
              </LinkButton>
              {t(TranslationKeys.AndThe)}
              <LinkButton onClick={() => openModal(modalsName.privacyPolicy)}>
                {t(TranslationKeys.PrivacyPolicy)}
              </LinkButton>
              {t(TranslationKeys.AndAgreeToThem)}
            </p>
          </Checkbox>
        )}
      />
      <Button
        type="submit"
        label={t(TranslationKeys.Registration)}
        width="400px"
        height="40px"
        margin="0 0 var(--small-indent) 0"
      />
      <LineWithText label={t(TranslationKeys.UseGoogle)} />
      <GoogleAuthBtn width={400} />
    </form>
  );
};

export default Desktop;
