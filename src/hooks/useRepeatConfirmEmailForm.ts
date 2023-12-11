import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { RepeatConfirmEmailFormInputs } from 'types/inputs/RepeatConfirmEmailFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import RepeatConfirmEmailFormSchema from 'validations/RepeatConfirmEmailFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';

const useRepeatConfirmEmailForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useAppDispatch();

  const validation = {
    resolver: yupResolver<RepeatConfirmEmailFormInputs>(RepeatConfirmEmailFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RepeatConfirmEmailFormInputs>(validation);

  const onSubmit: SubmitHandler<RepeatConfirmEmailFormInputs> = async value => {
    const response = await dispatch(operations.repeatConfirmEmail(value));
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      toast.success('The confirmation email has been sent again.');
      setIsSuccess(true);
    }
  };

  return { handleSubmit, onSubmit, register, errors, isSuccess };
};

export default useRepeatConfirmEmailForm;
