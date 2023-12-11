import * as yup from 'yup';

const RequestPasswordResetFormSchema = yup
  .object({
    email: yup.string().email('Invalid email format').required('Email is required'),
  })
  .required();

export default RequestPasswordResetFormSchema;
