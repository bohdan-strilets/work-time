import { ExpensesListProps } from 'types/props/ExpensesListProps';
import { TaxThreshold } from 'types/enums/TaxThreshold';
import { List, Item, Value } from './ExpensesList.styled';

const ExpensesList: React.FC<ExpensesListProps> = ({
  healthInsurance,
  incomeTax,
  pensionContribution,
  disabilityContribution,
  sicknessInsuranceContribution,
}) => {
  return (
    <List>
      <Item>
        <p>Pension contribution (9.76%)</p>
        <Value>- {pensionContribution} PLN</Value>
      </Item>
      <Item>
        <p>Disability contribution (1.5%)</p>
        <Value>- {disabilityContribution} PLN</Value>
      </Item>
      <Item>
        <p>Sickness insurance contribution (2.45%)</p>
        <Value>- {sicknessInsuranceContribution} PLN</Value>
      </Item>
      <Item>
        <p>Health insurance premium (9%)</p>
        <Value>- {healthInsurance} PLN</Value>
      </Item>
      <Item>
        <p>Advance payment of income tax ({TaxThreshold.low}%)</p>
        <Value>- {incomeTax} PLN</Value>
      </Item>
    </List>
  );
};

export default ExpensesList;
