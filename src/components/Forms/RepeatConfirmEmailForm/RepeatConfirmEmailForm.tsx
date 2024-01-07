import { useTranslation } from 'react-i18next';
import TextInput from 'components/UI/TextInput';
import Button from 'components/UI/Button';
import Reference from 'components/UI/Reference';
import useRepeatConfirmEmailForm from 'hooks/useRepeatConfirmEmailForm';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Text } from '../Forms.styled';

const RepeatConfirmEmailForm: React.FC<{}> = () => {
  const { errors, handleSubmit, isSuccess, onSubmit, register } = useRepeatConfirmEmailForm();
  const { t } = useTranslation();

  return (
    <>
      <Text margin="0 0 var(--small-indent) 0">
        {t(AuthLngKeys.ActivationEmailParagraph1, { ns: LocalesKeys.auth })}
      </Text>
      <Text margin="0 0 var(--small-indent) 0">
        {t(AuthLngKeys.ActivationEmailParagraph2, { ns: LocalesKeys.auth })}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="email"
          name="email"
          label={t(AuthLngKeys.WhatIsYourEmailAddress, { ns: LocalesKeys.auth })}
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
          width="270px"
        />
      </form>
      {isSuccess && (
        <Text margin="var(--small-indent) 0 0 0" color="var(--green-color)">
          {t(AuthLngKeys.ActivationEmailParagraph3, { ns: LocalesKeys.auth })}{' '}
          <Reference path="/" label="homepage" />{' '}
          {t(AuthLngKeys.ActivationEmailParagraph4, { ns: LocalesKeys.auth })}.
        </Text>
      )}
    </>
  );
};

export default RepeatConfirmEmailForm;
