import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import useRequestPasswordResetForm from 'hooks/useRequestPasswordResetForm';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Text } from '../Forms.styled';

const RequestPasswordResetForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register } = useRequestPasswordResetForm();
  const { t } = useTranslation();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.RequestPasswordMessage)}</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(TranslationKeys.RequestPasswordField)}
          placeholder="yellow.mango@mail.com"
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button type="submit" label={t(TranslationKeys.Send)} height="40px" width="270px" />
      </form>
    </>
  );
};

export default RequestPasswordResetForm;
