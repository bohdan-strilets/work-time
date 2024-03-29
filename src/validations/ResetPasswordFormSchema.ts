import * as yup from 'yup';
import { passwordRegex } from 'utilities/regex/passwordRegex';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const ResetPasswordFormSchema = yup
  .object({
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
    passwordAgain: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        translateLabel(ValidationLngKeys.PasswordsMustMatch, LocalesKeys.validation),
      )
      .required(
        translateLabel(ValidationLngKeys.PasswordConfirmationIsRequired, LocalesKeys.validation),
      ),
  })
  .required();

export default ResetPasswordFormSchema;
