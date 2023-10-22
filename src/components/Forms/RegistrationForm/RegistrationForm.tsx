import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationFormInputs } from "types/inputs/RegistrationFormInputs";
import RegistrationFormSchema from "validations/RegistrationFormSchema";

const RegistrationForm: React.FC<{}> = () => {
  const validation = {
    resolver: yupResolver<RegistrationFormInputs>(RegistrationFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>(validation);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          type="text"
          {...register("firstName", { required: true })}
          placeholder="Mango"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>
      <label>
        <input
          type="text"
          {...register("lastName", { required: true })}
          placeholder="Yellow"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>
      <label>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="yellow.mango@gmail.com"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <label>
        <input type="text" {...register("password", { required: true })} />
        {errors.password && <p>{errors.password.message}</p>}
      </label>
      <label>
        <input type="text" {...register("passwordAgain", { required: true })} />
        {errors.passwordAgain && <p>{errors.passwordAgain.message}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
