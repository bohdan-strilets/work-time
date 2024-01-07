import { useTranslation } from 'react-i18next';
import { PrivacyPolicyLngKeys } from 'types/locales/PrivacyPolicyLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Title, Text, Accent, List } from './PrivacyPolicy.styled';

const PrivacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text margin="var(--small-indent) 0 var(--small-indent) 0">
        {t(CommonLngKeys.LastUpdated, { ns: LocalesKeys.common })}: <Accent>06.01.2023</Accent>
      </Text>
      <Title>
        {t(PrivacyPolicyLngKeys.CollectedPersonalInformation, { ns: LocalesKeys.privacyPolicy })}
      </Title>
      <Text margin="0 0 5px 0">
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph1, { ns: LocalesKeys.privacyPolicy })}
      </Text>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(CommonLngKeys.FullName, { ns: LocalesKeys.common })}</p>
        </li>
        <li>
          <p>{t(CommonLngKeys.Password, { ns: LocalesKeys.common })}</p>
        </li>
        <li>
          <p>{t(CommonLngKeys.Email, { ns: LocalesKeys.common })}</p>
        </li>
        <li>
          <p>{t(CommonLngKeys.Gender, { ns: LocalesKeys.common })}</p>
        </li>
        <li>
          <p>
            {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph2, { ns: LocalesKeys.privacyPolicy })}
          </p>
        </li>
        <li>
          <p>{t(CommonLngKeys.PersonalPhoto, { ns: LocalesKeys.common })}</p>
        </li>
        <li>
          <p>
            {t(PrivacyPolicyLngKeys.InformationRegardingWorkShifts, {
              ns: LocalesKeys.privacyPolicy,
            })}
          </p>
        </li>
      </List>
      <Title>
        {t(PrivacyPolicyLngKeys.PurposeOfDataCollection, { ns: LocalesKeys.privacyPolicy })}
      </Title>
      <Text margin="0 0 5px 0">
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph3, { ns: LocalesKeys.privacyPolicy })}
      </Text>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>
            {t(PrivacyPolicyLngKeys.TimeTrackingOfWorkAndShifts, { ns: LocalesKeys.privacyPolicy })}
          </p>
        </li>
        <li>
          <p>
            {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph4, { ns: LocalesKeys.privacyPolicy })}
          </p>
        </li>
      </List>
      <Title>
        {t(PrivacyPolicyLngKeys.ThirdPartyDataSharing, { ns: LocalesKeys.privacyPolicy })}
      </Title>
      <Text margin="0 0 var(--small-indent) 0">
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph5, { ns: LocalesKeys.privacyPolicy })}
      </Text>
      <Title>{t(PrivacyPolicyLngKeys.DataSecurity, { ns: LocalesKeys.privacyPolicy })}</Title>
      <Text margin="0 0 var(--small-indent) 0">
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph6, { ns: LocalesKeys.privacyPolicy })}
      </Text>
      <Title>
        {t(PrivacyPolicyLngKeys.ManagementOfPersonalData, { ns: LocalesKeys.privacyPolicy })}
      </Title>
      <Text margin="0 0 var(--small-indent) 0">
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph7, { ns: LocalesKeys.privacyPolicy })}
      </Text>
      <Title>{t(PrivacyPolicyLngKeys.CookieUsage, { ns: LocalesKeys.privacyPolicy })}</Title>
      <Text margin="0 0 var(--small-indent) 0">
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph8, { ns: LocalesKeys.privacyPolicy })}
      </Text>
      <Title>
        {t(PrivacyPolicyLngKeys.PrivacyPolicyUpdates, { ns: LocalesKeys.privacyPolicy })}
      </Title>
      <Text>
        {t(PrivacyPolicyLngKeys.PrivacyPolicyParagraph9, { ns: LocalesKeys.privacyPolicy })}
      </Text>
    </>
  );
};

export default PrivacyPolicy;
