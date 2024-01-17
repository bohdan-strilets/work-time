import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { RegistrationFormInputs } from 'types/inputs/RegistrationFormInputs';
import RegistrationFormSchema from 'validations/RegistrationFormSchema';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from '../redux/user/userOperations';
import { UserResponseType } from 'types/types/UserResponseType';
import { UserType } from 'types/types/UserType';
import { TokensType } from 'types/types/TokensType';
import useModalWindow from './useModalWindow';

const useRegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { modalsName } = useModalWindow();

  const validation = {
    resolver: yupResolver<RegistrationFormInputs>(RegistrationFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<RegistrationFormInputs>(validation);

  const onSubmit: SubmitHandler<RegistrationFormInputs> = async value => {
    const user = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
    };

    if (value.rules) {
      const response = await dispatch(operations.registration(user));
      const data = response.payload as UserResponseType<UserType, TokensType>;
      if (data && data.success) navigate(`/calendar?modal=${modalsName.greetings}`);
    } else {
      setError('rules', {
        message: 'Read the privacy policy and site rules and if you agree, check the box.',
      });
    }
  };

  return { register, handleSubmit, errors, onSubmit, Controller, control };
};

export default useRegistrationForm;
