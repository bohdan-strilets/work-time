import * as yup from 'yup';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const StatisticsFilteringFormSchema = yup.object().shape({
  startMonth: yup
    .string()
    .required(translateLabel(ValidationLngKeys.FieldIsRequired, LocalesKeys.validation)),
  startYear: yup
    .string()
    .required(translateLabel(ValidationLngKeys.FieldIsRequired, LocalesKeys.validation)),
  endMonth: yup
    .string()
    .required(translateLabel(ValidationLngKeys.FieldIsRequired, LocalesKeys.validation)),
  endYear: yup
    .string()
    .required(translateLabel(ValidationLngKeys.FieldIsRequired, LocalesKeys.validation)),
});

export default StatisticsFilteringFormSchema;
