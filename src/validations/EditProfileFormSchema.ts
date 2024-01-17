import * as yup from 'yup';
import { Gender } from 'types/enums/GenderEnum';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const EditProfileFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, translateLabel(ValidationLngKeys.FirstNameMinLength, LocalesKeys.validation))
    .max(100, translateLabel(ValidationLngKeys.FirstNameMaxLength, LocalesKeys.validation))
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  lastName: yup
    .string()
    .min(1, translateLabel(ValidationLngKeys.LastNameMinLength, LocalesKeys.validation))
    .max(100, translateLabel(ValidationLngKeys.LastNameMaxLength, LocalesKeys.validation))
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  gender: yup
    .mixed<Gender>()
    .oneOf(
      Object.values(Gender),
      translateLabel(ValidationLngKeys.GenderValidation, LocalesKeys.validation),
    )
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  dateBirth: yup
    .date()
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  description: yup
    .string()
    .min(1, translateLabel(ValidationLngKeys.DescriptionMinLength, LocalesKeys.validation))
    .max(1000, translateLabel(ValidationLngKeys.DescriptionMaxLength, LocalesKeys.validation))
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  companyName: yup
    .string()
    .min(1, translateLabel(ValidationLngKeys.CompanyNameMinLength, LocalesKeys.validation))
    .max(200, translateLabel(ValidationLngKeys.CompanyNameMaxLength, LocalesKeys.validation))
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  profession: yup
    .string()
    .min(1, translateLabel(ValidationLngKeys.ProfessionMinLength, LocalesKeys.validation))
    .max(200, translateLabel(ValidationLngKeys.ProfessionMaxLength, LocalesKeys.validation))
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  startWork: yup
    .date()
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
  salaryPerHour: yup
    .number()
    .min(1, translateLabel(ValidationLngKeys.SalaryMinValue, LocalesKeys.validation))
    .max(1000, translateLabel(ValidationLngKeys.SalaryMaxValue, LocalesKeys.validation))
    .nullable()
    .transform((current, original) => (original === '' ? null : current)),
});

export default EditProfileFormSchema;
