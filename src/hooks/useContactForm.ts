import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactFormInputs } from 'types/inputs/ContactFormInputs';
import ContactFormSchema from 'validations/ContactFormSchema';

const useContactForm = () => {
  const validation = {
    resolver: yupResolver<ContactFormInputs>(ContactFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>(validation);

  const onSubmit: SubmitHandler<ContactFormInputs> = data => {
    console.log('message is succesed send');
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useContactForm;
