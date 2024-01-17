import * as yup from 'yup';
import { passwordRegex } from 'utilities/Regex';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const ChangePasswordFormSchema = yup
  .object({
    password: yup
      .string()
      .notRequired()
      .nullable()
      .min(6, translateLabel(ValidationLngKeys.PasswordMinLength, LocalesKeys.validation))
      .max(12, translateLabel(ValidationLngKeys.PasswordMaxLength, LocalesKeys.validation))
      .matches(
        passwordRegex,
        translateLabel(ValidationLngKeys.PasswordRequirements, LocalesKeys.validation),
      ),
    newPassword: yup
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
        [yup.ref('newPassword')],
        translateLabel(ValidationLngKeys.PasswordsMustMatch, LocalesKeys.validation),
      )
      .required(
        translateLabel(ValidationLngKeys.PasswordConfirmationIsRequired, LocalesKeys.validation),
      ),
  })
  .required();

export default ChangePasswordFormSchema;
