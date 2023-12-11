import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import useRequestPasswordResetForm from 'hooks/useRequestPasswordResetForm';
import { Text } from '../Forms.styled';

const RequestPasswordResetForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register } = useRequestPasswordResetForm();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        Once you provide your email address, a password reset email will be sent to your inbox. This
        email will contain a link that will allow you to reset your password securely.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" label="Send" height="40px" width="270px" />
      </form>
    </>
  );
};

export default RequestPasswordResetForm;
