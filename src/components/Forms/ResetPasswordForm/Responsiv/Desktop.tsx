import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import PasswordInput from 'components/UI/PasswordInput';
import Button from 'components/UI/Button';
import useResetPasswordForm from 'hooks/useResetPasswordForm';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Container, Wrapper, Title } from '../../Forms.styled';

const Desktop: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register } = useResetPasswordForm();
  const { t } = useTranslation();

  return (
    <Container width="50%">
      <Title>{t(TranslationKeys.ResetPassword)}</Title>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(TranslationKeys.RequestPasswordField)}
          placeholder="yellow.mango@mail.com"
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <PasswordInput
          name="password"
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
          label={t(TranslationKeys.ResetPassword)}
          height="40px"
          width="300px"
        />
      </Wrapper>
    </Container>
  );
};

export default Desktop;
