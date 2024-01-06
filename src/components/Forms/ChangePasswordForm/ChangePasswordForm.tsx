import { useTranslation } from 'react-i18next';
import PasswordInput from 'components/UI/PasswordInput';
import Button from 'components/UI/Button';
import useChangePasswordForm from 'hooks/useChangePasswordForm';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const ChangePasswordForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, password } = useChangePasswordForm();
  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {password && (
          <PasswordInput
            name="password"
            label={t(ProfileLngKeys.EnterCurrentPassword, { ns: LocalesKeys.profile })}
            placeholder={t(CommonLngKeys.PasswordPlaceholder, { ns: LocalesKeys.common })}
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
          label={t(ProfileLngKeys.CreateNewPassword, { ns: LocalesKeys.profile })}
          placeholder={t(CommonLngKeys.PasswordPlaceholder, { ns: LocalesKeys.common })}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
          padding="0 45px 0 35px"
        />
        <PasswordInput
          name="passwordAgain"
          label={t(ProfileLngKeys.RepeatEnteredPassword, { ns: LocalesKeys.profile })}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
          padding="0 45px 0 35px"
        />
        <Button
          type="submit"
          label={t(ProfileLngKeys.ChangedPassword, { ns: LocalesKeys.profile })}
          height="40px"
          width="270px"
        />
      </form>
    </>
  );
};

export default ChangePasswordForm;
