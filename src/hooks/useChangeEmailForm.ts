import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { ChangeEmailFormInputs } from 'types/inputs/ChangeEmailFormInputs';
import { UserResponseType } from 'types/types/UserResponseType';
import ChangeEmailFormSchema from 'validations/ChangeEmailFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import useModalWindow from 'hooks/useModalWindow';
import operations from '../redux/user/userOperations';
import { getEmail } from '../redux/user/userSelectors';

const useChangeEmailForm = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getEmail);
  const { closeModal } = useModalWindow();

  const validation = {
    resolver: yupResolver<ChangeEmailFormInputs>(ChangeEmailFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeEmailFormInputs>(validation);

  const onSubmit: SubmitHandler<ChangeEmailFormInputs> = async value => {
    const response = await dispatch(operations.changeEmail(value));
    const data = response.payload as UserResponseType;
    if (data && data.success) {
      closeModal();
      toast.success('The email address has been successfully changed.');
    }
  };

  return { handleSubmit, onSubmit, userEmail, register, errors };
};

export default useChangeEmailForm;
