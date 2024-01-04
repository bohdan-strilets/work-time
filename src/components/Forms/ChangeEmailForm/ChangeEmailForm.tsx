import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import useChangeEmailForm from 'hooks/useChangeEmailForm';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Text } from '../Forms.styled';

const ChangeEmailForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register, userEmail } = useChangeEmailForm();
  const { t } = useTranslation();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.ChangedEmail1_1)}</Text>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.ChangedEmail1_2)}</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(TranslationKeys.EnterNewEmailAddress)}
          placeholder="yellow.mango@mail.com"
          defaultValue={userEmail}
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label={t(TranslationKeys.ChangedEmail)} height="40px" width="270px" />
      </form>
    </>
  );
};

export default ChangeEmailForm;
