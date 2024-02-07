import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import useRequestPasswordResetForm from 'hooks/useRequestPasswordResetForm';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Text } from '../Forms.styled';

const RequestPasswordResetForm: React.FC<{}> = () => {
  const { errors, handleSubmit, onSubmit, register } = useRequestPasswordResetForm();
  const { t } = useTranslation();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        {t(AuthLngKeys.RequestPasswordParagraph1, { ns: LocalesKeys.auth })}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(CommonLngKeys.Email, { ns: LocalesKeys.common })}
          placeholder="yellow.mango@mail.com"
          register={register}
          errors={errors}
          height={40}
          required={true}
          margin="0 0 var(--small-indent) 0"
        />
        <Button
          type="submit"
          label={t(CommonLngKeys.Send, { ns: LocalesKeys.common })}
          height="40px"
          width="100%"
        />
      </form>
    </>
  );
};

export default RequestPasswordResetForm;
