import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import Reference from 'components/UI/Reference';
import useRepeatConfirmEmailForm from 'hooks/useRepeatConfirmEmailForm';
import { Text } from '../Forms.styled';

const RepeatConfirmEmailForm: React.FC<{}> = () => {
  const { errors, handleSubmit, isSuccess, onSubmit, register } = useRepeatConfirmEmailForm();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        If you haven't received your activation email or it got lost in your inbox, including the
        spam folder, you can use this form to request another one. Just enter your registered email
        address below and click the "Send" button.
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        Please remember to check your spam folder in case the activation email accidentally landed
        there.
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
      {isSuccess && (
        <Text margin="var(--small-indent) 0 0 0" color="var(--green-color)">
          Once you've activated your email, you're good to go! Head over to the{' '}
          <Reference path="/" label="homepage" /> and start enjoying all the features we have to
          offer.
        </Text>
      )}
    </>
  );
};

export default RepeatConfirmEmailForm;
