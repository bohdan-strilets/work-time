import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AddInformationFormInputs } from "types/inputs/AddInformationFormInputs";

const useAddInformationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddInformationFormInputs>();

  const onSubmit: SubmitHandler<AddInformationFormInputs> = (data) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit, Controller, control };
};

export default useAddInformationForm;
