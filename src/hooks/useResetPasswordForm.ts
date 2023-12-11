import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ResetPasswordFormInputs } from 'types/inputs/ResetPasswordFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import ResetPasswordFormSchema from 'validations/ResetPasswordFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';

const useResetPasswordForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validation = {
    resolver: yupResolver<ResetPasswordFormInputs>(ResetPasswordFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>(validation);

  const onSubmit: SubmitHandler<ResetPasswordFormInputs> = async value => {
    const resetPasswordDto = { password: value.password, email: value.email };
    const response = await dispatch(operations.resetPassword(resetPasswordDto));
    const data = response.payload as UserResponseType;

    if (data && data.success) {
      navigate('/auth');
      toast.success('The password has been successfully changed.');
    }
  };

  return { handleSubmit, onSubmit, register, errors };
};

export default useResetPasswordForm;
