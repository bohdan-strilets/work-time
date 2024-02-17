import { useTranslation } from 'react-i18next';
import { BiSolidUser } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Textarea from 'components/UI/Textarea';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import useContactForm from 'hooks/useContactForm';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';

const ContactForm: React.FC<{}> = () => {
  const { handleSubmit, onSubmit, register, errors, isLoading } = useContactForm();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="name"
        placeholder={t(CommonLngKeys.Name, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="email"
        icon={<MdMail size={18} />}
        name="email"
        placeholder={t(CommonLngKeys.Email, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <Textarea
        name="text"
        placeholder={t(CommonLngKeys.Message, { ns: LocalesKeys.common })}
        required={true}
        register={register}
        errors={errors}
        height={180}
        margin="0 0 var(--medium-indent) 0"
      />
      {isLoading && <Loader />}
      <Button
        type="submit"
        label={t(CommonLngKeys.Send, { ns: LocalesKeys.common })}
        width="100%"
        height="40px"
      />
    </form>
  );
};

export default ContactForm;
