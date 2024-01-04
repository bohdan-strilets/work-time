import { useTranslation } from 'react-i18next';
import GenderOptions from 'utilities/GenderOptions';
import TextInput from 'components/UI/TextInput';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import DateInput from 'components/UI/DateInput';
import useEditProfileForm from 'hooks/useEditProfileForm';
import { EditProfileFormProps } from 'types/props/EditProfileFormProps';
import { TranslationKeys } from 'types/enums/TranslationKeys';

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
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="firstName"
        label={t(TranslationKeys.WhatAreYouFirstName)}
        placeholder={t(TranslationKeys.FirstName)}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={firstName}
      />
      <TextInput
        type="text"
        name="lastName"
        label={t(TranslationKeys.WhatAreYouLastName)}
        placeholder={t(TranslationKeys.LastName)}
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
            label={t(TranslationKeys.ChooseYourGender)}
            buttonlabel={t(TranslationKeys.Gender)}
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
            label={`${t(TranslationKeys.WillYouChooseYourDateBirth)} ${t(
              TranslationKeys.DateBirthFormat,
            )}`}
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
        label={t(TranslationKeys.WhatNameCompany)}
        placeholder={t(TranslationKeys.CompanyName)}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={companyName}
      />
      <TextInput
        type="text"
        name="profession"
        label={t(TranslationKeys.WhatNameYourProfession)}
        placeholder={t(TranslationKeys.Profession)}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={profession}
      />
      <Controller
        name="startWork"
        control={control}
        defaultValue={new Date(startWork ?? '')}
        render={({ field }) => (
          <DateInput
            name="startWork"
            label={`${t(TranslationKeys.StartDateForWorking)} ${t(
              TranslationKeys.DateBirthFormat,
            )}`}
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
        label={t(TranslationKeys.YourRatePerHourWork)}
        placeholder={t(TranslationKeys.SalaryPerHour)}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={salaryPerHour}
      />
      <Button type="submit" label={t(TranslationKeys.EditProfile)} width="270px" height="40px" />
    </form>
  );
};

export default EditProfileForm;
