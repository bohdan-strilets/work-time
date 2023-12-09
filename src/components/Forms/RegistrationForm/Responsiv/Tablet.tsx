import { BiSolidUser, BiSolidLock } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import Checkbox from 'components/UI/Checkbox';
import ModalWindow from 'components/ModalWindow';
import PrivacyPolicy from 'components/Auth/PrivacyPolicy';
import TermsUseSite from 'components/Auth/TermsUseSite';
import PasswordInput from 'components/UI/PasswordInput';
import GoogleAuthBtn from 'components/UI/GoogleAuthBtn';
import LineWithText from 'components/UI/LineWithText';
import useRegistrationForm from 'hooks/useRegistrationForm';
import useModalWindow from 'hooks/useModalWindow';
import { ReferenceBtn } from '../RegistrationForm.styled';

const Tablet: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit, Controller, control } = useRegistrationForm();
  const { modalsName, openModal, checkQueryParam } = useModalWindow();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          icon={<BiSolidUser size={18} />}
          name="firstName"
          placeholder="First name"
          required={true}
          register={register}
          errors={errors}
          width={330}
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
          width={330}
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
          width={330}
          height={40}
          margin="0 0 var(--medium-indent) 0"
        />
        <PasswordInput
          icon={<BiSolidLock size={18} />}
          name="password"
          placeholder="Password"
          required={true}
          register={register}
          errors={errors}
          width={330}
          height={40}
          margin="0 0 var(--medium-indent) 0"
        />
        <PasswordInput
          icon={<BiSolidLock size={18} />}
          name="passwordAgain"
          placeholder="Password again"
          required={true}
          register={register}
          errors={errors}
          width={330}
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
          width="330px"
          height="40px"
          margin="0 0 var(--small-indent) 0"
        />
        <LineWithText label="Or use Google" />
        <GoogleAuthBtn width={330} />
      </form>
      {checkQueryParam(modalsName.privacyPolicy) && (
        <ModalWindow title="Privacy policy">
          <PrivacyPolicy />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.termsUseSite) && (
        <ModalWindow title="Terms of use of the site">
          <TermsUseSite />
        </ModalWindow>
      )}
    </>
  );
};

export default Tablet;
