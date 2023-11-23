import * as yup from 'yup';

const ContactFormSchema = yup.object().shape({
  name: yup.string().min(3, 'Name should be at least 3 characters').required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  text: yup
    .string()
    .min(15, 'Text should be at least 15 characters')
    .max(1000, 'Text should not exceed 1000 characters')
    .required('Text is required'),
});

export default ContactFormSchema;
