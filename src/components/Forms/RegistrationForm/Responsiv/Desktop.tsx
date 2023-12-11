import { BiSolidUser, BiSolidLock } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import PasswordInput from 'components/UI/PasswordInput';
import GoogleAuthBtn from 'components/UI/GoogleAuthBtn';
import LineWithText from 'components/UI/LineWithText';
import useRegistrationForm from 'hooks/useRegistrationForm';
import useModalWindow from 'hooks/useModalWindow';
import { ReferenceBtn } from '../../Forms.styled';

const Desktop: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit, Controller, control } = useRegistrationForm();
  const { modalsName, openModal } = useModalWindow();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="firstName"
        placeholder="First name"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="lastName"
        placeholder="Last name"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
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
      <PasswordInput
        icon={<BiSolidLock size={18} />}
        name="passwordAgain"
        placeholder="Least one letter, one digit, and one special character  ! @ # $ % &"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <Controller
        name="rules"
        control={control}
        render={({ field }) => (
          <Checkbox
            name="rules"
            errors={errors}
            register={register}
            required={true}
            onChange={(value: boolean) => field.onChange(value)}
            margin="0 0 var(--small-indent) 0"
            childrenWidth="365px"
          >
            <p>
              I have read the
              <ReferenceBtn type="button" onClick={() => openModal(modalsName.termsUseSite)}>
                terms of use of the site
              </ReferenceBtn>
              and the
              <ReferenceBtn type="button" onClick={() => openModal(modalsName.privacyPolicy)}>
                privacy policy
              </ReferenceBtn>
              and agree to them.
            </p>
          </Checkbox>
        )}
      />
      <Button
        type="submit"
        label="Registration"
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
