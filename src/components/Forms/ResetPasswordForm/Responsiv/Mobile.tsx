import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import PasswordInput from 'components/UI/PasswordInput';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import useResetPasswordForm from 'hooks/useResetPasswordForm';
import { ResetPasswordLngKeys } from 'types/locales/ResetPasswordLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { Container, Wrapper, Title } from '../../Forms.styled';

const Mobile: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, isLoading } = useResetPasswordForm();
  const { t } = useTranslation();

  return (
    <Container width="98  %">
      <Title>{t(ResetPasswordLngKeys.ResetPassword, { ns: LocalesKeys.resetPassword })}</Title>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(ResetPasswordLngKeys.WhatIsYourEmailAddress, { ns: LocalesKeys.resetPassword })}
          placeholder="yellow.mango@mail.com"
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <PasswordInput
          name="password"
          label={t(ResetPasswordLngKeys.CreateNewPassword, { ns: LocalesKeys.resetPassword })}
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
          label={t(ResetPasswordLngKeys.RepeatEnteredPassword, { ns: LocalesKeys.resetPassword })}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
          padding="0 45px 0 35px"
        />
        {isLoading && <Loader />}
        <Button
          type="submit"
          label={t(ResetPasswordLngKeys.ResetPassword, { ns: LocalesKeys.resetPassword })}
          height="40px"
          width="100%"
        />
      </Wrapper>
    </Container>
  );
};

export default Mobile;
