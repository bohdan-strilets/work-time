import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import useChangeEmailForm from 'hooks/useChangeEmailForm';
import { Text } from '../Forms.styled';

const ChangeEmailForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, userEmail } = useChangeEmailForm();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        Enter the new email address you want to use. After making the changes, the system will
        automatically send an activation email to the new address.
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        Please ensure the accuracy of the entered email address, as an email with activation
        instructions will be sent to it. If you don't receive the activation email within a few
        minutes, check your "Spam" or "Junk" folder in your email inbox. Please note that the new
        email address will not be activated until you confirm it by clicking the link in the
        activation email. If you encounter any difficulties or have questions, don't hesitate to
        contact our support team.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label="Enter a new email address."
          placeholder="yellow.mango@mail.com"
          defaultValue={userEmail}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label="Change email" height="40px" width="270px" />
      </form>
    </>
  );
};

export default ChangeEmailForm;
