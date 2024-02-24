import { useTranslation } from 'react-i18next';
import DropdownList from 'components/UI/DropdownList';
import Checkbox from 'components/UI/Checkbox';
import Button from 'components/UI/Button';
import TextInput from 'components/UI/TextInput';
import Loader from 'components/UI/Loader';
import ContractTypeOptions from 'utilities/dropdownListOptions/ContractTypeOptions';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import useCalculationSetupForm from 'hooks/useCalculationSetupForm';

const CalculationSetupForm: React.FC<{}> = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    onSubmit,
    control,
    errors,
    calculationSettings,
    register,
    Controller,
    ppkSelected,
    isLoading,
  } = useCalculationSetupForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="contractType"
        control={control}
        render={({ field }) => (
          <DropdownList
            type="single"
            name="contractType"
            options={ContractTypeOptions}
            label={t(ProfileLngKeys.SelectContractType, { ns: LocalesKeys.profile })}
            buttonlabel={t(CommonLngKeys.Type, { ns: LocalesKeys.common })}
            height="40px"
            width="100%"
            margin="0 0 var(--small-indent) 0"
            onChange={(value: string | string[]) => field.onChange(value)}
            errors={errors}
            required={true}
            position="relative"
            defaultValue={calculationSettings?.contractType}
          />
        )}
      />
      <Controller
        name="areYouAlready26Years"
        control={control}
        render={({ field }) => (
          <Checkbox
            name="areYouAlready26Years"
            errors={errors}
            register={register}
            onChange={(value: boolean) => field.onChange(value)}
            margin="0 0 var(--small-indent) 0"
            defaultValue={calculationSettings?.areYouAlready26Years}
          >
            <p>{t(ProfileLngKeys.AreYouAlreadyYearsOld, { ns: LocalesKeys.profile })}</p>
          </Checkbox>
        )}
      />
      <Controller
        name="ppk"
        control={control}
        render={({ field }) => (
          <Checkbox
            name="ppk"
            errors={errors}
            register={register}
            onChange={(value: boolean) => field.onChange(value)}
            margin="0 0 var(--small-indent) 0"
            defaultValue={calculationSettings?.ppk}
          >
            <p>{t(ProfileLngKeys.AreYouParticipantInPPK, { ns: LocalesKeys.profile })}</p>
          </Checkbox>
        )}
      />
      {ppkSelected && (
        <TextInput
          type="number"
          name="ppkRate"
          label={t(ProfileLngKeys.PpkContributionRateYouPay, { ns: LocalesKeys.profile })}
          placeholder={t(ProfileLngKeys.MinimumValueAndMaximum, { ns: LocalesKeys.profile })}
          defaultValue={calculationSettings?.ppkRate}
          minValue={0.5}
          maxValue={4}
          step={0.1}
          register={register}
          errors={errors}
          height={40}
          margin="0 0 var(--small-indent) 0"
        />
      )}
      {isLoading && <Loader />}
      <Button
        type="submit"
        label={t(CommonLngKeys.Save, { ns: LocalesKeys.common })}
        width="100%"
        height="40px"
      />
    </form>
  );
};

export default CalculationSetupForm;
