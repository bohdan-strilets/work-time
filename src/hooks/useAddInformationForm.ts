import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddInformationFormInputs } from "types/inputs/AddInformationFormInputs";
import AddInformationFormSchema from "validations/AddInformationFormSchema";

const useAddInformationForm = () => {
  const validation = {
    resolver: yupResolver<AddInformationFormInputs>(AddInformationFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddInformationFormInputs>(validation);

  const onSubmit: SubmitHandler<AddInformationFormInputs> = (data) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useAddInformationForm;
