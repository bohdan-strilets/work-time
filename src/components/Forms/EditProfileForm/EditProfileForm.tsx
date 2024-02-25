import { useTranslation } from 'react-i18next';
import GenderOptions from 'utilities/dropdownListOptions/GenderOptions';
import TextInput from 'components/UI/TextInput';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import DateInput from 'components/UI/DateInput';
import Textarea from 'components/UI/Textarea';
import Loader from 'components/UI/Loader';
import useEditProfileForm from 'hooks/useEditProfileForm';
import { EditProfileFormProps } from 'types/props/EditProfileFormProps';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  firstName,
  lastName,
  gender,
  dateBirth,
  companyName,
  profession,
  startWork,
  salaryPerHour,
  description,
}) => {
  const { register, errors, Controller, control, setValue, handleSubmit, onSubmit, isLoading } =
    useEditProfileForm();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name="firstName"
        label={t(ProfileLngKeys.WhatIsYourFirstName, { ns: LocalesKeys.profile })}
        placeholder={t(CommonLngKeys.FirstName, { ns: LocalesKeys.common })}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={firstName}
      />
      <TextInput
        type="text"
        name="lastName"
        label={t(ProfileLngKeys.WhatIsYourLastName, { ns: LocalesKeys.profile })}
        placeholder={t(CommonLngKeys.LastName, { ns: LocalesKeys.common })}
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
            label={t(ProfileLngKeys.ChooseYourGender, { ns: LocalesKeys.profile })}
            buttonlabel={t(CommonLngKeys.Gender, { ns: LocalesKeys.common })}
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
      <Textarea
        name="description"
        label={t(ProfileLngKeys.WriteFewWordsAboutYourself, { ns: LocalesKeys.profile })}
        placeholder={t(ProfileLngKeys.HelloHereWantedToTellYouLittleAboutMyself, {
          ns: LocalesKeys.profile,
        })}
        register={register}
        errors={errors}
        height={180}
        margin="0 0 var(--small-indent) 0"
        defaultValue={description}
      />
      <Controller
        name="dateBirth"
        control={control}
        defaultValue={new Date(dateBirth ? dateBirth : '')}
        render={({ field }) => (
          <DateInput
            name="dateBirth"
            label={`${t(ProfileLngKeys.WillYouChooseYourDateOfBirth, {
              ns: LocalesKeys.profile,
            })} ${t(CommonLngKeys.DateFormat, { ns: LocalesKeys.common })}`}
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
        label={t(ProfileLngKeys.WhatIsTheNameOfTheCompany, { ns: LocalesKeys.profile })}
        placeholder={t(CommonLngKeys.CompanyName, { ns: LocalesKeys.common })}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={companyName}
      />
      <TextInput
        type="text"
        name="profession"
        label={t(ProfileLngKeys.WhatIsTheNameOfYourProfession, { ns: LocalesKeys.profile })}
        placeholder={t(CommonLngKeys.Profession, { ns: LocalesKeys.common })}
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
            label={`${t(ProfileLngKeys.WillYouChooseStartDateForWorking, {
              ns: LocalesKeys.profile,
            })} ${t(CommonLngKeys.DateFormat, { ns: LocalesKeys.common })}`}
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
        label={t(ProfileLngKeys.YourRatePerHourOfWork, { ns: LocalesKeys.profile })}
        placeholder={t(CommonLngKeys.SalaryPerHour, { ns: LocalesKeys.common })}
        register={register}
        errors={errors}
        height={40}
        margin="0 0 var(--medium-indent) 0"
        defaultValue={salaryPerHour}
      />
      {isLoading && <Loader />}
      <Button
        type="submit"
        label={t(ProfileLngKeys.EditProfile, { ns: LocalesKeys.profile })}
        width="100%"
        height="40px"
      />
    </form>
  );
};

export default EditProfileForm;
