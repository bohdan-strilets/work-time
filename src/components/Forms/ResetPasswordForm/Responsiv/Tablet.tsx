import TextInput from 'components/UI/TextInput';
import PasswordInput from 'components/UI/PasswordInput';
import Button from 'components/UI/Button';
import useResetPasswordForm from 'hooks/useResetPasswordForm';
import { Container, Wrapper, Title } from '../../Forms.styled';

const Tablet: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register } = useResetPasswordForm();

  return (
    <Container width="80%">
      <Title>Reset password</Title>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label="What a your email address?"
          placeholder="yellow.mango@mail.com"
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <PasswordInput
          name="password"
          label="Create a new password."
          placeholder="Least one letter, one digit, and one special character  ! @ # $ % &"
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <PasswordInput
          name="passwordAgain"
          label="Repeat the entered password again."
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label="Reset password" height="40px" width="300px" />
      </Wrapper>
    </Container>
  );
};

export default Tablet;
