import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import MonthOptions from 'utilities/MonthOption';
import YearOptions from 'utilities/YearOptions';
import { ControllersForStatsProps } from 'types/props/ControllersForStatsProps';
import useFilteredStatisticForm from 'hooks/useFilteredStatisticForm';
import { Wrapper, Group, Text } from '../Controllers.styled';

const Mobile: React.FC<ControllersForStatsProps> = ({ getFilterDate }) => {
  const { Controller, control, errors, handleSubmit, onSubmit } = useFilteredStatisticForm({
    getFilterDate,
  });
  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <Text>From:</Text>

        <Controller
          name="startMonth"
          control={control}
          render={({ field }) => (
            <DropdownList
              type="single"
              name="startMonth"
              options={MonthOptions}
              onChange={(value: string | string[]) => field.onChange(value)}
              buttonlabel="Month"
              height="30px"
              width="250px"
              margin="0 0 10px 0"
              errors={errors}
              defaultValue={MonthOptions[0].value}
              position="absolute"
            />
          )}
        />
        <Controller
          name="startYear"
          control={control}
          render={({ field }) => (
            <DropdownList
              type="single"
              name="startYear"
              options={YearOptions}
              onChange={(value: string | string[]) => field.onChange(value)}
              buttonlabel="Year"
              height="30px"
              width="250px"
              errors={errors}
              margin="0 0 var(--medium-indent) 0"
              defaultValue={YearOptions[0].value}
              position="absolute"
            />
          )}
        />
      </Group>
      <Group>
        <Text>To:</Text>
        <Controller
          name="endMonth"
          control={control}
          render={({ field }) => (
            <DropdownList
              type="single"
              name="endMonth"
              options={MonthOptions}
              onChange={(value: string | string[]) => field.onChange(value)}
              buttonlabel="Month"
              height="30px"
              width="250px"
              margin="0 0 10px 0"
              errors={errors}
              defaultValue={MonthOptions[MonthOptions.length - 1].value}
              position="absolute"
            />
          )}
        />
        <Controller
          name="endYear"
          control={control}
          render={({ field }) => (
            <DropdownList
              type="single"
              name="endYear"
              options={YearOptions}
              onChange={(value: string | string[]) => field.onChange(value)}
              buttonlabel="Year"
              height="30px"
              width="250px"
              errors={errors}
              margin="0 0 var(--medium-indent) 0"
              defaultValue={YearOptions[YearOptions.length - 1].value}
              position="absolute"
            />
          )}
        />
      </Group>
      <Button type="submit" height="30px" width="250px" label="Filter" />
    </Wrapper>
  );
};

export default Mobile;
