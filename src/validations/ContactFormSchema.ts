import * as yup from 'yup';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const ContactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, translateLabel(ValidationLngKeys.NameMinLength, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.NameIsRequired, LocalesKeys.validation)),
  email: yup
    .string()
    .email(translateLabel(ValidationLngKeys.InvalidEmailFormat, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.EmailIsRequired, LocalesKeys.validation)),
  text: yup
    .string()
    .min(15, translateLabel(ValidationLngKeys.TextMinLength, LocalesKeys.validation))
    .max(1000, translateLabel(ValidationLngKeys.TextMaxLength, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.TextIsRequired, LocalesKeys.validation)),
});

export default ContactFormSchema;
