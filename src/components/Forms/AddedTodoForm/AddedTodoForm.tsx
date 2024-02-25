import { useTranslation } from 'react-i18next';
import Textarea from 'components/UI/Textarea';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import { PriorityOptions } from 'utilities/dropdownListOptions/PriorityOptions';
import PriorityEnum from 'types/enums/PriorityEnum';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { AddedTodoFormProps } from 'types/props/AddedTodoFormProps';
import useAddedTodoForm from 'hooks/useAddedTodoForm';

const AddedTodoForm: React.FC<AddedTodoFormProps> = ({ dayId, selectedDate }) => {
  const { t } = useTranslation();
  const { Controller, control, errors, handleSubmit, onSubmit, register, isLoading } =
    useAddedTodoForm({
      dayId,
      selectedDate,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        name="task"
        label={t(TodosLngKeys.PlanTaskForDay, { ns: LocalesKeys.todos })}
        placeholder={t(TodosLngKeys.GoToStoreForGroceries, { ns: LocalesKeys.todos })}
        required={true}
        register={register}
        errors={errors}
        height={140}
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
            defaultValue={PriorityEnum.Low}
            position="relative"
          />
        )}
      />
      {isLoading && <Loader />}
      <Button
        type="submit"
        label={t(CommonLngKeys.Create, { ns: LocalesKeys.common })}
        width="100%"
        height="40px"
      />
    </form>
  );
};

export default AddedTodoForm;
