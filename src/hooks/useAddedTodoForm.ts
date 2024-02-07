import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddedTodoFormInputs } from 'types/inputs/AddedTodoFormInputs';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { useCreateTodoMutation } from '../redux/todo/todoApi';
import { AddedTodoFormProps } from 'types/props/AddedTodoFormProps';
import useModalWindow from 'hooks/useModalWindow';
import AddedTodoFormSchema from 'validations/AddedTodoFormSchema';
import useSoundSprite from './useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';
import { FormatDateTimeZone } from 'utilities/FormatDateTimeZone';
import { TodosResponseType } from 'types/types/TodosResponseType';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import CustomErrorHandler from 'utilities/CustomErrorHandler';

const useAddedTodoForm = ({ dayId, selectedDate }: AddedTodoFormProps) => {
  const validation = {
    resolver: yupResolver<AddedTodoFormInputs>(AddedTodoFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddedTodoFormInputs>(validation);
  const { t } = useTranslation();
  const [createTodo, { isLoading }] = useCreateTodoMutation();
  const { closeModal } = useModalWindow();
  const { play } = useSoundSprite();

  const onSubmit: SubmitHandler<AddedTodoFormInputs> = async value => {
    if (selectedDate) {
      const formatedDate = FormatDateTimeZone(selectedDate);
      const dto = {
        dayId: dayId ?? '',
        task: value.task,
        priority: value.priority,
        isCompleted: false,
        appointmentDate: formatedDate,
      };

      await createTodo(dto);
      try {
        closeModal();
        toast.success(t(TodosLngKeys.TaskSuccessfullyCreated, { ns: LocalesKeys.todos }));
        play({ id: SoundNamesEnum.Success });
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<TodosResponseType>;
          if (axiosError.response) {
            const serverError = axiosError.response.data as TodosResponseType;
            CustomErrorHandler(serverError);
          } else {
            toast.error(t(ErrorLngKeys.GeneralAxiosError, { ns: LocalesKeys.error }));
          }
        } else {
          toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
        }
      }
    }
  };

  return { handleSubmit, onSubmit, register, errors, control, Controller, isLoading };
};

export default useAddedTodoForm;
