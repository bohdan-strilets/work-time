import * as yup from 'yup';

const RepeatConfirmEmailFormSchema = yup
  .object({
    email: yup.string().email('Invalid email format').required('Email is required'),
  })
  .required();

export default RepeatConfirmEmailFormSchema;
