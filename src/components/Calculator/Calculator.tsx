import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CalculatorLngKeys } from 'types/locales/CalculatorLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import useCalculateTax from 'hooks/useCalculateTax';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSalaryPerHour } from '../../redux/user/userSelectors';
import normalizingForNumber from 'utilities/normalizingForNumber';
import {
  Text,
  Wrapper,
  InputLabel,
  Label,
  InputForHours,
  InputWrapper,
  NumberField,
  ResultWindow,
  List,
  Item,
  Value,
  ValueWrapper,
  Prefix,
} from './Calculator.styled';

const Calculator: React.FC<{}> = () => {
  const salaryPerHour = useAppSelector(getSalaryPerHour);
  const [bruttoPerHours, setBruttoPerHours] = useState(salaryPerHour ?? 0);
  const [hoursInWeek, setHoursInWeek] = useState(40);
  const { calculateTotal } = useCalculateTax({ earningForDay: bruttoPerHours });
  const { t } = useTranslation();

  const handleChangeBruttoPerHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bruttoPerHours = Number(e.target.value);
    setBruttoPerHours(bruttoPerHours);
  };

  const handleChangeHoursInWeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hoursInWeek = Number(e.target.value);
    setHoursInWeek(hoursInWeek);
  };

  const quantityHours = {
    week: hoursInWeek,
    month: hoursInWeek * 4,
    quarter: hoursInWeek * 13,
    halfYear: hoursInWeek * 26,
    year: hoursInWeek * 56,
  };

  return (
    <>
      <Text>{t(CalculatorLngKeys.Paragraph, { ns: LocalesKeys.calculator })}</Text>
      <Wrapper>
        <InputWrapper>
          <p>{t(CalculatorLngKeys.RatePerHourBrutto, { ns: LocalesKeys.calculator })}:</p>
          <NumberField
            type="number"
            name="grossRatePerHour"
            value={bruttoPerHours}
            min={0}
            max={1000}
            maxLength={4}
            onChange={handleChangeBruttoPerHours}
          />
          <Prefix position="absolute" bottom="0" right="10px" fontSize="24px">
            PLN
          </Prefix>
        </InputWrapper>
        <InputWrapper>
          <p>{t(CommonLngKeys.Net, { ns: LocalesKeys.common })}:</p>
          <ResultWindow>{normalizingForNumber(calculateTotal(bruttoPerHours))}</ResultWindow>
          <Prefix position="absolute" bottom="0" right="10px" fontSize="24px">
            PLN
          </Prefix>
        </InputWrapper>
      </Wrapper>
      <InputLabel>
        <Label>
          {t(CalculatorLngKeys.NumberWorkingHoursPerWeek, { ns: LocalesKeys.calculator })}:
        </Label>
        <InputForHours
          type="number"
          name="numberHoursPerWeek"
          min={1}
          max={90}
          maxLength={2}
          value={hoursInWeek}
          onChange={handleChangeHoursInWeek}
        />
      </InputLabel>
      <List>
        <Item>
          <p>{t(CalculatorLngKeys.SalaryPerDay, { ns: LocalesKeys.calculator })}:</p>
          <ValueWrapper>
            <Value>{normalizingForNumber(calculateTotal(bruttoPerHours))}</Value>
            <Prefix>PLN</Prefix>
          </ValueWrapper>
        </Item>
        <Item>
          <p>{t(CalculatorLngKeys.SalaryPerWeek, { ns: LocalesKeys.calculator })}:</p>
          <ValueWrapper>
            <Value>
              {normalizingForNumber(calculateTotal(bruttoPerHours * quantityHours.week))}
            </Value>
            <Prefix>PLN</Prefix>
          </ValueWrapper>
        </Item>
        <Item>
          <p>{t(CalculatorLngKeys.MonthlySalary, { ns: LocalesKeys.calculator })}:</p>
          <ValueWrapper>
            <Value>
              {normalizingForNumber(calculateTotal(bruttoPerHours * quantityHours.month))}
            </Value>
            <Prefix>PLN</Prefix>
          </ValueWrapper>
        </Item>
        <Item>
          <p>{t(CalculatorLngKeys.SalaryForQuarter, { ns: LocalesKeys.calculator })}:</p>
          <ValueWrapper>
            <Value>
              {normalizingForNumber(calculateTotal(bruttoPerHours * quantityHours.quarter))}
            </Value>
            <Prefix>PLN</Prefix>
          </ValueWrapper>
        </Item>
        <Item>
          <p>{t(CalculatorLngKeys.SaileForHalfYear, { ns: LocalesKeys.calculator })}:</p>
          <ValueWrapper>
            <Value>
              {normalizingForNumber(calculateTotal(bruttoPerHours * quantityHours.halfYear))}
            </Value>
            <Prefix>PLN</Prefix>
          </ValueWrapper>
        </Item>
        <Item>
          <p>{t(CalculatorLngKeys.SalaryForYear, { ns: LocalesKeys.calculator })}:</p>
          <ValueWrapper>
            <Value>
              {normalizingForNumber(calculateTotal(bruttoPerHours * quantityHours.year))}
            </Value>
            <Prefix>PLN</Prefix>
          </ValueWrapper>
        </Item>
      </List>
    </>
  );
};

export default Calculator;
