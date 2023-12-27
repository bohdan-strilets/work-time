import * as yup from 'yup';

const StatisticsFilteringFormSchema = yup.object().shape({
  startMonth: yup.string().required('Field is required'),
  startYear: yup.string().required('Field is required'),
  endMonth: yup.string().required('Field is required'),
  endYear: yup.string().required('Field is required'),
});

export default StatisticsFilteringFormSchema;
