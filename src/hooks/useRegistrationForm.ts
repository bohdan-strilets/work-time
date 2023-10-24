import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { RegistrationFormInputs } from "types/inputs/RegistrationFormInputs";
import RegistrationFormSchema from "validations/RegistrationFormSchema";

const useRegistrationForm = () => {
  const navigate = useNavigate();

  const validation = {
    resolver: yupResolver<RegistrationFormInputs>(RegistrationFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>(validation);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) => {
    window.alert(`Dear ${data.firstName} ${data.lastName} wellcome to site.`);
    navigate("/calendar");
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useRegistrationForm;
