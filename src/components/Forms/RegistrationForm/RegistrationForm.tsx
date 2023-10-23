import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BiSolidUser, BiSolidLock } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import TextInput from "components/UI/TextInput";
import Button from "components/UI/Button";
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
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="firstName"
        placeholder="First name"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="text"
        icon={<BiSolidUser size={18} />}
        name="lastName"
        placeholder="Last name"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
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
      <TextInput
        type="password"
        icon={<BiSolidLock size={18} />}
        name="passwordAgain"
        placeholder="Password again"
        required={true}
        register={register}
        errors={errors}
        width={400}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <Button type="submit" label="Registration" width="400px" height="40px" />
    </form>
  );
};

export default RegistrationForm;
