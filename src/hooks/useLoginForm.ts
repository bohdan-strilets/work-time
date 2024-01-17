import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { LoginFormInputs } from 'types/inputs/LoginFormInputs';
import LoginFormSchema from 'validations/LoginFormSchema';
import { useAppDispatch } from './useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import { UserType } from 'types/types/UserType';
import { TokensType } from 'types/types/TokensType';

const useLoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validation = {
    resolver: yupResolver<LoginFormInputs>(LoginFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>(validation);

  const onSubmit: SubmitHandler<LoginFormInputs> = async value => {
    const response = await dispatch(operations.login(value));
    const data = response.payload as UserResponseType<UserType, TokensType>;
    if (data && data.success) navigate('/calendar');
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useLoginForm;
