import { UserDataProps } from 'types/props/UserDataProps';
import { Group, Name, Status, Item, Property } from './UserData.styled';

const UserData: React.FC<UserDataProps> = ({
  name,
  isActivateed,
  email,
  gender,
  dateBirth,
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
          <p>{email}</p>
        </Item>
        <Item>
          <Property>Password:</Property>
          <p>**********</p>
        </Item>
        <Item>
          <Property>Gender:</Property>
          <p>{gender}</p>
        </Item>
        <Item>
          <Property>Date of birth:</Property>
          <p>{dateBirth} | 28 year</p>
        </Item>
        <Item>
          <Property>Company name:</Property>
          <p>{workInfo.companyName}</p>
        </Item>
        <Item>
          <Property>Profession:</Property>
          <p>{workInfo.profession}</p>
        </Item>
        <Item>
          <Property>Start work:</Property>
          <p>{workInfo.startWork} | 4 year</p>
        </Item>
        <Item>
          <Property>Salary per hour:</Property>
          <p>{workInfo.salaryPerHour} PLN</p>
        </Item>
      </ul>
    </>
  );
};

export default UserData;
