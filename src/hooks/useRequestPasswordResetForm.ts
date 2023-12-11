import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { RequestPasswordResetFormInputs } from 'types/inputs/RequestPasswordResetFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import RequestPasswordResetFormSchema from 'validations/RequestPasswordResetFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import useModalWindow from './useModalWindow';

const useRequestPasswordResetForm = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useModalWindow();

  const validation = {
    resolver: yupResolver<RequestPasswordResetFormInputs>(RequestPasswordResetFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestPasswordResetFormInputs>(validation);

  const onSubmit: SubmitHandler<RequestPasswordResetFormInputs> = async value => {
    const response = await dispatch(operations.requestResetPassword(value));
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      toast.success('A password reset email has been successfully sent to your email address.');
      closeModal();
    }
  };

  return { handleSubmit, onSubmit, register, errors };
};

export default useRequestPasswordResetForm;
