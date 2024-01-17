import * as yup from 'yup';
import { passwordRegex } from 'utilities/Regex';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(translateLabel(ValidationLngKeys.InvalidEmailFormat, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.EmailIsRequired, LocalesKeys.validation)),
  password: yup
    .string()
    .required(translateLabel(ValidationLngKeys.PasswordIsRequired, LocalesKeys.validation))
    .min(6, translateLabel(ValidationLngKeys.PasswordMinLength, LocalesKeys.validation))
    .max(16, translateLabel(ValidationLngKeys.PasswordMaxLength, LocalesKeys.validation))
    .matches(
      passwordRegex,
      translateLabel(ValidationLngKeys.PasswordRequirements, LocalesKeys.validation),
    ),
});

export default LoginFormSchema;
