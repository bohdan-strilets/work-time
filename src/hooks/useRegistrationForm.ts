import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegistrationFormInputs } from 'types/inputs/RegistrationFormInputs';
import RegistrationFormSchema from 'validations/RegistrationFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import { UserType } from 'types/types/UserType';
import { TokensType } from 'types/types/TokensType';

const useRegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validation = {
    resolver: yupResolver<RegistrationFormInputs>(RegistrationFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInputs>(validation);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async value => {
    const user = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
    };

    const response = await dispatch(operations.registration(user));
    const data = response.payload as UserResponseType<UserType, TokensType>;
    if (data && data.success) {
      navigate('/calendar');
    } else {
      navigate('/auth');
      toast.warning('Something went wrong, please check the entered data and try again.');
    }
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useRegistrationForm;
