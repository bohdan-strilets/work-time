import * as yup from 'yup';
import { passwordRegex } from 'utilities/Regex';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const RegistrationFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(translateLabel(ValidationLngKeys.FirstNameIsRequired, LocalesKeys.validation))
    .min(2, translateLabel(ValidationLngKeys.FirstNameMinLength, LocalesKeys.validation))
    .max(50, translateLabel(ValidationLngKeys.FirstNameMaxLength, LocalesKeys.validation)),
  lastName: yup
    .string()
    .required(translateLabel(ValidationLngKeys.LastNameIsRequired, LocalesKeys.validation))
    .min(2, translateLabel(ValidationLngKeys.LastNameMinLength, LocalesKeys.validation))
    .max(50, translateLabel(ValidationLngKeys.LastNameMaxLength, LocalesKeys.validation)),
  email: yup
    .string()
    .email(translateLabel(ValidationLngKeys.InvalidEmailFormat, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.EmailIsRequired, LocalesKeys.validation)),
  password: yup
    .string()
    .required(translateLabel(ValidationLngKeys.PasswordIsRequired, LocalesKeys.validation))
    .min(6, translateLabel(ValidationLngKeys.PasswordMinLength, LocalesKeys.validation))
    .max(12, translateLabel(ValidationLngKeys.PasswordMaxLength, LocalesKeys.validation))
    .matches(
      passwordRegex,
      translateLabel(ValidationLngKeys.PasswordRequirements, LocalesKeys.validation),
    ),
  passwordAgain: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      translateLabel(ValidationLngKeys.PasswordsMustMatch, LocalesKeys.validation),
    )
    .required(
      translateLabel(ValidationLngKeys.PasswordConfirmationIsRequired, LocalesKeys.validation),
    ),
  rules: yup
    .boolean()
    .oneOf([true], translateLabel(ValidationLngKeys.AcceptRules, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.AcceptRules, LocalesKeys.validation)),
});

export default RegistrationFormSchema;
