import { BiSolidUser } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';
import TextInput from 'components/UI/TextInput';
import Textarea from 'components/UI/Textarea';
import Button from 'components/UI/Button';
import useContactForm from 'hooks/useContactForm';

const ContactForm: React.FC<{}> = () => {
  const { handleSubmit, onSubmit, register, errors } = useContactForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="name"
        placeholder="Name"
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
        placeholder="Email"
        required={true}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <Textarea
        name="text"
        placeholder="Message"
        required={true}
        register={register}
        errors={errors}
        height={180}
        margin="0 0 var(--medium-indent) 0"
      />
      <Button type="submit" label="Send" width="300px" height="40px" />
    </form>
  );
};

export default ContactForm;
