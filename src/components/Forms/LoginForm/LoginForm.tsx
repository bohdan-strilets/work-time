import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiSolidLock } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import TextInput from "components/UI/TextInput";
import Button from "components/UI/Button";
import { LoginFormInputs } from "types/inputs/LoginFormInputs";
import LoginFormSchema from "validations/LoginFormSchema";

const LoginForm: React.FC<{}> = () => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        icon={<MdMail size={18} />}
        name="email"
        placeholder="Email"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="password"
        icon={<BiSolidLock size={18} />}
        name="password"
        placeholder="Password"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />

      <Button type="submit" label="Login" width="400px" height="40px" />
    </form>
  );
};

export default LoginForm;
