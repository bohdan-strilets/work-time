import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import useChangeEmailForm from 'hooks/useChangeEmailForm';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Text } from '../Forms.styled';

const ChangeEmailForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, userEmail } = useChangeEmailForm();
  const { t } = useTranslation();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        {t(ProfileLngKeys.ChangedEmailParagraph1, { ns: LocalesKeys.profile })}
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        {t(ProfileLngKeys.ChangedEmailParagraph2, { ns: LocalesKeys.profile })}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(ProfileLngKeys.EnterNewEmailAddress, { ns: LocalesKeys.profile })}
          placeholder="yellow.mango@mail.com"
          defaultValue={userEmail}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button
          type="submit"
          label={t(ProfileLngKeys.ChangedEmail, { ns: LocalesKeys.profile })}
          height="40px"
          width="100%"
        />
      </form>
    </>
  );
};

export default ChangeEmailForm;
