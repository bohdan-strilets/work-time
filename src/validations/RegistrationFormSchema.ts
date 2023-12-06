import * as yup from 'yup';
import { passwordRegex } from 'utilities/Regex';

const RegistrationFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .max(12, 'Password must not exceed 12 characters')
    .matches(
      passwordRegex,
      'Password must contain at least one letter, one digit, and one special character (6-12 characters)',
    ),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required'),
  rules: yup
    .boolean()
    .oneOf([true], 'You must accept the rules')
    .required('You must accept the rules'),
});

export default RegistrationFormSchema;
