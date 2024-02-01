import { useTranslation } from 'react-i18next';
import Textarea from 'components/UI/Textarea';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import { PriorityOptions } from 'utilities/PriorityOptions';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import useEditTodoForm from 'hooks/useEditTodoForm';
import { EditTodoFormProps } from 'types/props/EditTodoFormProps';

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todoId }) => {
  const { t } = useTranslation();
  const { handleSubmit, onSubmit, register, errors, control, Controller, todo, isLoading } =
    useEditTodoForm({
      todoId,
    });

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          name="task"
          label={t(TodosLngKeys.PlanTaskForDay, { ns: LocalesKeys.todos })}
          placeholder={t(TodosLngKeys.GoToStoreForGroceries, { ns: LocalesKeys.todos })}
          required={true}
          register={register}
          errors={errors}
          height={140}
          defaultValue={todo?.task}
          margin="0 0 var(--medium-indent) 0"
        />
        <Controller
          name="priority"
          control={control}
          render={({ field }) => (
            <DropdownList
              type="single"
              name="priority"
              options={PriorityOptions}
              label={t(TodosLngKeys.SetPriorityForTask, { ns: LocalesKeys.todos })}
              buttonlabel={t(CommonLngKeys.Priority, { ns: LocalesKeys.common })}
              height="40px"
              width="100%"
              margin="0 0 var(--small-indent) 0"
              onChange={(value: string | string[]) => field.onChange(value)}
              errors={errors}
              required={true}
              defaultValue={todo?.priority}
              position="relative"
            />
          )}
        />
        <Button
          type="submit"
          label={t(CommonLngKeys.Edit, { ns: LocalesKeys.common })}
          width="270px"
          height="40px"
        />
      </form>
    </>
  );
};

export default EditTodoForm;
