import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ChangePasswordFormInput } from 'types/inputs/ChangePasswordFormInput';
import { UserResponseType } from 'types/types/UserResponseType';
import ChangePasswordFormSchema from 'validations/ChangePasswordFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import useModalWindow from 'hooks/useModalWindow';
import operations from '../redux/user/userOperations';
import { useAppSelector } from './useAppSelector';
import { getPassword } from '../redux/user/userSelectors';
import { ChangePasswordDto } from 'types/dto/ChangePasswordDto';

const useChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();
  const password = useAppSelector(getPassword);

  const validation = {
    resolver: yupResolver<ChangePasswordFormInput>(ChangePasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormInput>(validation);

  const onSubmit: SubmitHandler<ChangePasswordFormInput> = async value => {
    let changePasswordDto: ChangePasswordDto = { newPassword: '' };

    if (password) {
      changePasswordDto = {
        password: value.password,
        newPassword: value.newPassword,
      };
    } else {
      changePasswordDto = {
        newPassword: value.newPassword,
      };
    }

    const response = await dispatch(operations.changePassword(changePasswordDto));
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      closeModal();
      toast.success('The password has been successfully changed.');
    }
  };

  return { handleSubmit, onSubmit, register, errors, password };
};

export default useChangePasswordForm;
