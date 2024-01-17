import * as yup from 'yup';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const ChangeEmailFormSchema = yup
  .object({
    email: yup
      .string()
      .email(translateLabel(ValidationLngKeys.InvalidEmailFormat, LocalesKeys.validation))
      .required(translateLabel(ValidationLngKeys.EmailIsRequired, LocalesKeys.validation)),
  })
  .required();

export default ChangeEmailFormSchema;
