import { useTranslation } from 'react-i18next';
import DropdownList from 'components/UI/DropdownList';
import Button from 'components/UI/Button';
import MonthOptions from 'utilities/dropdownListOptions/MonthOption';
import YearOptions from 'utilities/YearOptions';
import { ControllersForStatsProps } from 'types/props/ControllersForStatsProps';
import useFilteredStatisticForm from 'hooks/useFilteredStatisticForm';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Wrapper, Group, Text } from '../Controllers.styled';

const Tablet: React.FC<ControllersForStatsProps> = ({ getFilterDate }) => {
  const { Controller, control, errors, handleSubmit, onSubmit } = useFilteredStatisticForm({
    getFilterDate,
  });
  const { t } = useTranslation();

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <Text>{t(CommonLngKeys.From, { ns: LocalesKeys.common })}:</Text>
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
              defaultValue={YearOptions[0].value}
              position="absolute"
            />
          )}
        />
      </Group>
      <Group>
        <Text>{t(CommonLngKeys.To, { ns: LocalesKeys.common })}:</Text>
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
              defaultValue={MonthOptions[0].value}
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
              defaultValue={YearOptions[YearOptions.length - 1].value}
              position="absolute"
            />
          )}
        />
      </Group>
      <Button
        type="submit"
        height="30px"
        width="100px"
        label={t(CommonLngKeys.Filter, { ns: LocalesKeys.common })}
      />
    </Wrapper>
  );
};

export default Tablet;
