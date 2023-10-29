import { month } from "utilities/DefaultCalendarData";
import CalendarButton from "../CalendarButton";
import { MonthListProps } from "types/props/MonthListProps";
import { Wrapper, List, Item } from "./MonthList.styled";

const MonthList: React.FC<MonthListProps> = ({
  handleChangeMonth,
  selectedMonth,
}) => {
  return (
    <Wrapper>
      <List>
        {month.map((name, index) => (
          <Item key={index}>
            <CalendarButton
              value={index}
              handleClichk={handleChangeMonth}
              selectedMonth={selectedMonth}
              index={index}
            >
              {name}
            </CalendarButton>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default MonthList;
