import { useTranslation } from 'react-i18next';
import { UserDataProps } from 'types/props/UserDataProps';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Group, Name, Status, Id, Description, Item, Property, Value } from './UserData.styled';

const UserData: React.FC<UserDataProps> = ({
  name,
  isActivateed,
  email,
  gender,
  dateBirth,
  age,
  workInfo,
  userId,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Group>
        <Name>{name}</Name>
        <Status isActivateed={isActivateed} />
      </Group>
      <Id>ID: {userId}</Id>
      <Description>{description}</Description>
      <ul>
        <Item>
          <Property>{t(CommonLngKeys.Email, { ns: LocalesKeys.common })}:</Property>
          <Value>{email}</Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.Password, { ns: LocalesKeys.common })}:</Property>
          <Value>**********</Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.Gender, { ns: LocalesKeys.common })}:</Property>
          <Value>{gender}</Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.DateOfBirth, { ns: LocalesKeys.common })}:</Property>
          <Value>
            {dateBirth} | {age} {t(CommonLngKeys.Year, { ns: LocalesKeys.common })}
          </Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.CompanyName, { ns: LocalesKeys.common })}:</Property>
          <Value>{workInfo.companyName}</Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.Profession, { ns: LocalesKeys.common })}:</Property>
          <Value>{workInfo.profession}</Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.StartWork)}:</Property>
          <Value>
            {workInfo.startWork} | {workInfo.workExperience}{' '}
            {t(CommonLngKeys.Year, { ns: LocalesKeys.common })}
          </Value>
        </Item>
        <Item>
          <Property>{t(CommonLngKeys.SalaryPerHour, { ns: LocalesKeys.common })}:</Property>
          <Value>{workInfo.salaryPerHour} PLN</Value>
        </Item>
      </ul>
    </>
  );
};

export default UserData;
