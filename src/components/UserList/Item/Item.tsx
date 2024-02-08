import { useTranslation } from 'react-i18next';
import { RiEmotionLaughFill, RiCakeFill } from 'react-icons/ri';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { MdWork } from 'react-icons/md';
import { PiClockCountdownFill } from 'react-icons/pi';
import { BsCalendar3WeekFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa6';
import Avatar from 'components/UI/Avatar';
import FormatDateTime from 'utilities/FormatDateTime';
import FindLabelByValeu from 'utilities/FindLabelByValeu';
import GenderOptions from 'utilities/GenderOptions';
import { ItemProps } from 'types/props/ItemProps';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { StatisticsLngKeys } from 'types/locales/StatisticsLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import {
  Wrapper,
  FirstFloor,
  AvatarWrapper,
  NameWrapper,
  Name,
  Id,
  PropertyWrapper,
  KeyValue,
  Property,
  Value,
  Hours,
  Description,
} from './Item.styled';

const Item: React.FC<ItemProps> = ({
  avatarUrl,
  name,
  userId,
  gender,
  dateBirth,
  registrationDate,
  startWorkDate,
  companyName,
  profession,
  numberWorkingHours,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FirstFloor>
        <AvatarWrapper>
          <Avatar
            url={avatarUrl ?? '-'}
            alt={`Avatar by ${name}`}
            width="120px"
            height="120px"
            borderRadius="5px"
            border="2px solid var(--white-transparent-color)"
          />
          <NameWrapper>
            <Name>{name}</Name>
            <Id>ID: {userId}</Id>
          </NameWrapper>
        </AvatarWrapper>
        <div>
          <PropertyWrapper>
            <RiEmotionLaughFill size={20} color="var(--green-color)" />
            <KeyValue>
              <Property>{t(CommonLngKeys.Gender, { ns: LocalesKeys.common })}:</Property>
              <Value>{FindLabelByValeu(gender, GenderOptions)}</Value>
            </KeyValue>
          </PropertyWrapper>
          <PropertyWrapper>
            <RiCakeFill size={20} color="var(--green-color)" />
            <KeyValue>
              <Property>{t(CommonLngKeys.DateOfBirth, { ns: LocalesKeys.common })}:</Property>
              <Value>{FormatDateTime(dateBirth.toString())}</Value>
            </KeyValue>
          </PropertyWrapper>
          <PropertyWrapper>
            <FaStar size={20} color="var(--green-color)" />
            <KeyValue>
              <Property>{t(CommonLngKeys.DateRegistration, { ns: LocalesKeys.common })}:</Property>
              <Value>{FormatDateTime(registrationDate.toString())}</Value>
            </KeyValue>
          </PropertyWrapper>
        </div>
        <div>
          <PropertyWrapper>
            <BsCalendar3WeekFill color="var(--green-color)" />
            <KeyValue>
              <Property>{t(CommonLngKeys.StartWork, { ns: LocalesKeys.common })}:</Property>
              <Value>{FormatDateTime(startWorkDate.toString())}</Value>
            </KeyValue>
          </PropertyWrapper>
          <PropertyWrapper>
            <HiBuildingOffice2 size={20} color="var(--green-color)" />
            <KeyValue>
              <Property>{t(CommonLngKeys.CompanyName, { ns: LocalesKeys.common })}:</Property>
              <Value>{companyName ?? '-'}</Value>
            </KeyValue>
          </PropertyWrapper>
          <PropertyWrapper>
            <MdWork size={20} color="var(--green-color)" />
            <KeyValue>
              <Property>{t(CommonLngKeys.Profession, { ns: LocalesKeys.common })}:</Property>
              <Value>{profession ?? '-'}</Value>
            </KeyValue>
          </PropertyWrapper>
          <PropertyWrapper>
            <PiClockCountdownFill size={20} color="var(--green-color)" />
            <KeyValue>
              <Property>
                {t(StatisticsLngKeys.NumberOfWorkingHours, { ns: LocalesKeys.statistics })}:
              </Property>
              <Value>
                <Hours>{numberWorkingHours}</Hours>
              </Value>
            </KeyValue>
          </PropertyWrapper>
        </div>
      </FirstFloor>
      <Description>{description ?? '-'}</Description>
    </Wrapper>
  );
};

export default Item;
