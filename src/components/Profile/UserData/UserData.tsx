import { useTranslation } from 'react-i18next';
import { UserDataProps } from 'types/props/UserDataProps';
import { TranslationKeys } from 'types/enums/TranslationKeys';
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
  const { t } = useTranslation();

  return (
    <>
      <Group>
        <Name>{name}</Name>
        <Status isActivateed={isActivateed} />
      </Group>
      <ul>
        <Item>
          <Property>{t(TranslationKeys.Email)}:</Property>
          <Value>{email}</Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.Password)}:</Property>
          <Value>**********</Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.Gender)}:</Property>
          <Value>{gender}</Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.DateBirth)}:</Property>
          <Value>
            {dateBirth} | {age} year
          </Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.CompanyName)}:</Property>
          <Value>{workInfo.companyName}</Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.Profession)}:</Property>
          <Value>{workInfo.profession}</Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.StartWork)}:</Property>
          <Value>
            {workInfo.startWork} | {workInfo.workExperience} {t(TranslationKeys.Year)}
          </Value>
        </Item>
        <Item>
          <Property>{t(TranslationKeys.SalaryPerHour)}:</Property>
          <Value>{workInfo.salaryPerHour} PLN</Value>
        </Item>
      </ul>
    </>
  );
};

export default UserData;
