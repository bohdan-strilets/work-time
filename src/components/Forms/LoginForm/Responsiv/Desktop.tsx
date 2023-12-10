import { BiSolidLock } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import PasswordInput from 'components/UI/PasswordInput';
import GoogleAuthBtn from 'components/UI/GoogleAuthBtn';
import LineWithText from 'components/UI/LineWithText';
import useLoginForm from 'hooks/useLoginForm';

const Desktop: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        icon={<MdMail size={18} />}
        name="email"
        placeholder="Email"
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
        placeholder="Least one letter, one digit, and one special character  ! @ # $ % &"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />

      <Button
        type="submit"
        label="Login"
        width="400px"
        height="40px"
        margin="0 0 var(--small-indent) 0"
      />
      <LineWithText label="Or use Google" />
      <GoogleAuthBtn width={400} />
    </form>
  );
};

export default Desktop;
