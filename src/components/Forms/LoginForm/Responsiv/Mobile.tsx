import { BiSolidLock } from "react-icons/bi";
import { MdMail } from "react-icons/md";
import TextInput from "components/UI/TextInput";
import Button from "components/UI/Button";
import useLoginForm from "hooks/useLoginForm";

const Mobile: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        icon={<MdMail size={16} />}
        name="email"
        placeholder="Email"
        required={true}
        register={register}
        errors={errors}
        width={300}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />
      <TextInput
        type="password"
        icon={<BiSolidLock size={16} />}
        name="password"
        placeholder="Password"
        required={true}
        register={register}
        errors={errors}
        width={300}
        height={40}
        margin="0 0 var(--medium-indent) 0"
      />

      <Button type="submit" label="Login" width="300px" height="40px" />
    </form>
  );
};

export default Mobile;
