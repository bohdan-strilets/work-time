import { UserDataProps } from 'types/props/UserDataProps';
import { Group, Name, Status, Item, Property, Value } from './UserData.styled';

const UserData: React.FC<UserDataProps> = ({
  name,
  isActivateed,
  email,
  gender,
  dateBirth,
  age,
  workInfo,
}) => {
  return (
    <>
      <Group>
        <Name>{name}</Name>
        <Status isActivateed={isActivateed} />
      </Group>
      <ul>
        <Item>
          <Property>Email:</Property>
          <Value>{email}</Value>
        </Item>
        <Item>
          <Property>Password:</Property>
          <Value>**********</Value>
        </Item>
        <Item>
          <Property>Gender:</Property>
          <Value>{gender}</Value>
        </Item>
        <Item>
          <Property>Date of birth:</Property>
          <Value>
            {dateBirth} | {age} year
          </Value>
        </Item>
        <Item>
          <Property>Company name:</Property>
          <Value>{workInfo.companyName}</Value>
        </Item>
        <Item>
          <Property>Profession:</Property>
          <Value>{workInfo.profession}</Value>
        </Item>
        <Item>
          <Property>Start work:</Property>
          <Value>
            {workInfo.startWork} | {workInfo.workExperience} year
          </Value>
        </Item>
        <Item>
          <Property>Salary per hour:</Property>
          <Value>{workInfo.salaryPerHour} PLN</Value>
        </Item>
      </ul>
    </>
  );
};

export default UserData;
