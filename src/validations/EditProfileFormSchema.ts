import * as yup from 'yup';
import Gender from 'types/enums/GenderEnum';

const EditProfileFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, 'First name must be at least 1 characters')
    .max(100, 'First name must not exceed 100 characters')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  lastName: yup
    .string()
    .min(1, 'Last name must be at least 1 characters')
    .max(100, 'Last name must not exceed 100 characters')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  gender: yup
    .mixed<Gender>()
    .oneOf(Object.values(Gender), 'Please select a valid gender option')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  dateBirth: yup
    .date()
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  description: yup
    .string()
    .min(1, 'Description must be at least 1 characters')
    .max(1000, 'Description must not exceed 1000 characters')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  companyName: yup
    .string()
    .min(1, 'Company name must be at least 1 characters')
    .max(200, 'Company name must not exceed 200 characters')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  profession: yup
    .string()
    .min(1, 'Profession must be at least 1 characters')
    .max(200, 'Profession must not exceed 200 characters')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  startWork: yup
    .date()
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  salaryPerHour: yup
    .number()
    .min(1, 'Salary must be at least 1')
    .max(1000, 'Salary should not be more than 1000')
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
});

export default EditProfileFormSchema;
