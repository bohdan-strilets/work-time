import * as yup from 'yup';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import PriorityEnum from 'types/enums/PriorityEnum';

const EditTodoFormSchema = yup.object().shape({
  task: yup
    .string()
    .min(1, translateLabel(ValidationLngKeys.TaskMustBeAtLeast, LocalesKeys.validation))
    .max(1000, translateLabel(ValidationLngKeys.TaskMustNotExceed, LocalesKeys.validation))
    .required(translateLabel(ValidationLngKeys.FieldIsRequired, LocalesKeys.validation)),
  priority: yup
    .mixed<PriorityEnum>()
    .oneOf(
      Object.values(PriorityEnum),
      translateLabel(ValidationLngKeys.PleaseSelectValidPriorityOption, LocalesKeys.validation),
    ),
});

export default EditTodoFormSchema;
