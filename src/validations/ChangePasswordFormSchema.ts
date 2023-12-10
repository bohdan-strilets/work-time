import * as yup from 'yup';
import { passwordRegex } from 'utilities/Regex';

const ChangePasswordFormSchema = yup
  .object({
    password: yup
      .string()
      .notRequired()
      .nullable()
      .min(6, 'Password must be at least 6 characters long')
      .max(12, 'Password must not exceed 12 characters')
      .matches(
        passwordRegex,
        'Password must contain at least one letter, one digit, and one special character (6-16 characters)',
      ),
    newPassword: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long')
      .max(12, 'Password must not exceed 12 characters')
      .matches(
        passwordRegex,
        'Password must contain at least one letter, one digit, and one special character (6-16 characters)',
      ),
    passwordAgain: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .required('Password confirmation is required'),
  })
  .required();

export default ChangePasswordFormSchema;
