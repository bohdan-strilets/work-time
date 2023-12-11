import GenderOptions from 'utilities/GenderOptions';
import TextInput from 'components/UI/TextInput';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import DateInput from 'components/UI/DateInput';
import useEditProfileForm from 'hooks/useEditProfileForm';
import { EditProfileFormProps } from 'types/props/EditProfileFormProps';

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  firstName,
  lastName,
  gender,
  dateBirth,
  companyName,
  profession,
  startWork,
  salaryPerHour,
}) => {
  const { register, errors, Controller, control, setValue, handleSubmit, onSubmit } =
    useEditProfileForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="firstName"
        label="What are you first name?"
        placeholder="First name"
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={firstName}
      />
      <TextInput
        type="text"
        name="lastName"
        label="What are you last name?"
        placeholder="Last name"
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={lastName}
      />
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <DropdownList
            type="single"
            name="gender"
            options={GenderOptions}
            label="Choose your gender."
            buttonlabel="Gender"
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
            position="relative"
            defaultValue={gender}
          />
        )}
      />
      <Controller
        name="dateBirth"
        control={control}
        defaultValue={new Date(dateBirth ? dateBirth : '')}
        render={({ field }) => (
          <DateInput
            name="dateBirth"
            label="Will you choose your date of birth?"
            selected={field.value}
            onChange={date => setValue('dateBirth', date)}
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
          />
        )}
      />
      <TextInput
        type="text"
        name="companyName"
        label="What is the name of the company?"
        placeholder="Company name"
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={companyName}
      />
      <TextInput
        type="text"
        name="profession"
        label="What is the name of your profession?"
        placeholder="Profession"
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={profession}
      />
      <Controller
        name="startWork"
        control={control}
        defaultValue={new Date(startWork ? startWork : '')}
        render={({ field }) => (
          <DateInput
            name="startWork"
            label="Will you choose a start date for working for this company?"
            selected={field.value}
            onChange={date => setValue('startWork', date)}
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
          />
        )}
      />
      <TextInput
        type="number"
        name="salaryPerHour"
        label="Your rate per hour of work?"
        placeholder="Salary per hour"
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={salaryPerHour}
      />
      <Button type="submit" label="Edit profile" width="270px" height="40px" />
    </form>
  );
};

export default EditProfileForm;
