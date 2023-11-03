import * as yup from "yup";
import { Status } from "types/enums/StatusEnum";

const AddInformationFormSchema = yup.object().shape({
  status: yup
    .string()
    .oneOf(
      Object.values(Status),
      "Select one of the types for the selected day."
    )
    .required("This field is required and cannot be empty."),
  numberHoursWorked: yup
    .number()
    .min(0, "Minimum number of working hours.")
    .max(12, "Maximum number of working hours.")
    .required("This field is required and cannot be empty."),
  time: yup.string().required("This field is required and cannot be empty."),
  workShiftNumber: yup
    .number()
    .oneOf([0, 1, 2])
    .required("This field is required and cannot be empty."),
  additionalHours: yup
    .boolean()
    .required("This field is required and cannot be empty."),
});

export default AddInformationFormSchema;
