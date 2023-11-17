import { ExpensesListProps } from 'types/props/ExpensesListProps';
import { TaxThreshold } from 'types/enums/TaxThreshold';
import { List, Item, Value } from './ExpensesList.styled';

const ExpensesList: React.FC<ExpensesListProps> = ({
  socialSecurity,
  healthInsurance,
  incomeTax,
}) => {
  return (
    <List>
      <Item>
        <p>The amount of social security contributions (13.71%)</p>
        <Value>- {socialSecurity} PLN</Value>
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
