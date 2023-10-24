import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormInputs } from "types/inputs/LoginFormInputs";
import LoginFormSchema from "validations/LoginFormSchema";

const useLoginForm = () => {
  const validation = {
    resolver: yupResolver<LoginFormInputs>(LoginFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>(validation);

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    window.alert(`${data.email} wellcome to back.`);
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useLoginForm;
