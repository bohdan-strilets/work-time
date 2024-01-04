import { useTranslation } from 'react-i18next';
import PasswordInput from 'components/UI/PasswordInput';
import Button from 'components/UI/Button';
import useChangePasswordForm from 'hooks/useChangePasswordForm';
import { TranslationKeys } from 'types/enums/TranslationKeys';

const ChangePasswordForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, password } = useChangePasswordForm();
  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {password && (
          <PasswordInput
            name="password"
            label={t(TranslationKeys.EnterYourCurrentPassword)}
            placeholder={t(TranslationKeys.PasswordPlaceholder)}
            register={register}
            errors={errors}
            height={40}
            required={true}
            margin="0 0 var(--small-indent) 0"
            padding="0 45px 0 35px"
          />
        )}
        <PasswordInput
          name="newPassword"
          label={t(TranslationKeys.CreateNewPassword)}
          placeholder={t(TranslationKeys.PasswordPlaceholder)}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
          padding="0 45px 0 35px"
        />
        <PasswordInput
          name="passwordAgain"
          label={t(TranslationKeys.RepeatEnteredPasswordAgain)}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
          padding="0 45px 0 35px"
        />
        <Button
          type="submit"
          label={t(TranslationKeys.ChangedPassword)}
          height="40px"
          width="270px"
        />
      </form>
    </>
  );
};

export default ChangePasswordForm;
