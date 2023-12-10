import PasswordInput from 'components/UI/PasswordInput';
import Button from 'components/UI/Button';
import useChangePasswordForm from 'hooks/useChangePasswordForm';

const ChangePasswordForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, password } = useChangePasswordForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {password && (
          <PasswordInput
            name="password"
            label="Enter your current password."
            placeholder="Least one letter, one digit, and one special character  ! @ # $ % &"
            register={register}
            errors={errors}
            height={40}
            required={true}
            margin="0 0 var(--small-indent) 0"
          />
        )}
        <PasswordInput
          name="newPassword"
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
        <Button type="submit" label="Change password" height="40px" width="300px" />
      </form>
    </>
  );
};

export default ChangePasswordForm;
