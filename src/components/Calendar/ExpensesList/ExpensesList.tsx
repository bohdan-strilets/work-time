import { useTranslation } from 'react-i18next';
import { ExpensesListProps } from 'types/props/ExpensesListProps';
import { TaxThreshold } from 'types/enums/TaxThreshold';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { useAppSelector } from 'hooks/useAppSelector';
import {
  getPpk,
  getPpkRate,
  getContractType,
  getAlready26,
} from '../../../redux/user/userSelectors';
import { ContractTypeEnum } from 'types/enums/ContractTypeEnum';
import { List, Item, Value } from './ExpensesList.styled';

const ExpensesList: React.FC<ExpensesListProps> = ({
  healthInsurance,
  incomeTax,
  pensionContribution,
  disabilityContribution,
  sicknessInsuranceContribution,
  amountForPpk,
}) => {
  const { t } = useTranslation();
  const ppk = useAppSelector(getPpk);
  const ppkRate = useAppSelector(getPpkRate);
  const contractType = useAppSelector(getContractType);
  const already26 = useAppSelector(getAlready26);

  return (
    <List>
      <Item>
        <p>{t(CalendarLngKeys.PensionContribution, { ns: LocalesKeys.calendar })} (9.76%)</p>
        <Value>- {pensionContribution} PLN</Value>
      </Item>
      <Item>
        <p>{t(CalendarLngKeys.DisabilityContribution, { ns: LocalesKeys.calendar })} (1.5%)</p>
        <Value>- {disabilityContribution} PLN</Value>
      </Item>
      <Item>
        <p>
          {t(CalendarLngKeys.SicknessInsuranceContribution, { ns: LocalesKeys.calendar })} (2.45%)
        </p>
        <Value>- {sicknessInsuranceContribution} PLN</Value>
      </Item>
      <Item>
        <p>{t(CalendarLngKeys.HealthInsurancePremium, { ns: LocalesKeys.calendar })} (9%)</p>
        <Value>- {healthInsurance} PLN</Value>
      </Item>
      <Item>
        <p>
          {t(CalendarLngKeys.AdvancePaymentOfIncomeTax, { ns: LocalesKeys.calendar })} (
          {TaxThreshold.low}
          %)
        </p>
        <Value>- {incomeTax} PLN</Value>
      </Item>
      {((contractType === ContractTypeEnum.MandateContract && ppk && already26) ||
        (contractType === ContractTypeEnum.ContractEmployment && ppk)) && (
        <Item>
          <p>PPK ({ppkRate}%)</p>
          <Value>- {amountForPpk} PLN</Value>
        </Item>
      )}
    </List>
  );
};

export default ExpensesList;
