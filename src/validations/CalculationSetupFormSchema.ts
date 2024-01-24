import * as yup from 'yup';
import { translateLabel } from 'locales/config';
import { ValidationLngKeys } from 'types/locales/ValidationLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';

const CalculationSetupFormSchema = yup
  .object({
    contractType: yup
      .mixed<ContractTypeEnum>()
      .oneOf(
        Object.values(ContractTypeEnum),
        translateLabel(ValidationLngKeys.ChooseOneOptionFromList, LocalesKeys.validation),
      )
      .nullable()
      .transform((current, original) => (original === '' ? null : current))
      .required(
        translateLabel(ValidationLngKeys.ThisChoiceCannotRemainEmpty, LocalesKeys.validation),
      ),
    areYouAlready26Years: yup.boolean().optional(),
    ppk: yup.boolean().optional(),
    ppkRate: yup
      .number()
      .min(
        0.5,
        translateLabel(ValidationLngKeys.MinimumValueThatCanBeSpecified, LocalesKeys.validation),
      )
      .max(
        4,
        translateLabel(ValidationLngKeys.MaximumValueThatCanBeSpecified, LocalesKeys.validation),
      )
      .optional(),
  })

  .required();

export default CalculationSetupFormSchema;
