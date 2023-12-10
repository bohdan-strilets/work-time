import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { EditProfileFormInputs } from 'types/inputs/EditProfileFormInputs';
import EditProfileFormSchema from 'validations/EditProfileFormSchema';
import { useAppDispatch } from './useAppDispatch';
import useModalWindow from './useModalWindow';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import { UserType } from 'types/types/UserType';

const useEditProfileForm = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();

  const validation = {
    resolver: yupResolver<EditProfileFormInputs>(EditProfileFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<EditProfileFormInputs>(validation);

  const onSubmit: SubmitHandler<EditProfileFormInputs> = async value => {
    const userData = {
      firstName: value.firstName,
      lastName: value.lastName,
      dateBirth: value.dateBirth,
      gender: value.gender,
      companyInfo: {
        companyName: value.companyName,
        profession: value.profession,
        startWork: value.startWork,
        salaryPerHour: value.salaryPerHour,
      },
    };

    const response = await dispatch(operations.changeProfile(userData));
    const data = response.payload as UserResponseType<UserType>;
    if (data && data.success) {
      closeModal();
      toast.success('Your account information has been successfully updated.');
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    setValue,
  };
};

export default useEditProfileForm;
