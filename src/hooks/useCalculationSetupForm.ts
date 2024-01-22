import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { CalculationSetupInputs } from 'types/inputs/CalculationSetupInputs';
import { ProfileLngKeys } from 'types/locales/ProfileLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { useAppSelector } from 'hooks/useAppSelector';
import { getCalculationSettings } from '../redux/user/userSelectors';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import useModalWindow from 'hooks/useModalWindow';

const useCalculationSetupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<CalculationSetupInputs>();
  const { t } = useTranslation();
  const calculationSettings = useAppSelector(getCalculationSettings);
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();

  useEffect(() => {
    if (calculationSettings) {
      setValue('contractType', calculationSettings.contractType);
      setValue('areYouAlready26Years', calculationSettings.areYouAlready26Years);
      setValue('ppk', calculationSettings.ppk);
    }
  }, [
    calculationSettings,
    calculationSettings?.areYouAlready26Years,
    calculationSettings?.contractType,
    calculationSettings?.ppk,
    setValue,
  ]);

  const onSubmit: SubmitHandler<CalculationSetupInputs> = value => {
    dispatch(operations.changeSettings(value));
    toast.success(
      t(ProfileLngKeys.SettingsHaveBeenSuccessfullyChanged, { ns: LocalesKeys.profile }),
    );
    closeModal();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    calculationSettings,
  };
};

export default useCalculationSetupForm;
