import { useTranslation } from 'react-i18next';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Title, Text, Accent, List } from './PrivacyPolicy.styled';

const PrivacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text margin="var(--small-indent) 0 var(--small-indent) 0">
        {t(TranslationKeys.LastUpdated)}: <Accent>06.01.2023</Accent>
      </Text>
      <Title>{t(TranslationKeys.CollectedPersonalInformation)}</Title>
      <Text margin="0 0 5px 0">{t(TranslationKeys.PrivacPolicy1_1)}</Text>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.FullName)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.Password)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.EmailAddress)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.Gender)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.WorkInformation)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.PersonalPhoto)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.InformationWorkShifts)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.PurposeOfDataCollection)}</Title>
      <Text margin="0 0 5px 0">{t(TranslationKeys.PrivacyPolicy2_1)}</Text>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.PrivacyPolicy2_2)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.PrivacyPolicy2_3)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.ThirdPartyDataSharing)}</Title>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.PrivacyPolicy3_1)}</Text>
      <Title>{t(TranslationKeys.DataSecurity)}</Title>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.PrivacyPolicy4_1)}</Text>
      <Title>{t(TranslationKeys.ManagementOfPersonalData)}</Title>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.PrivacyPolicy5_1)}</Text>
      <Title>{t(TranslationKeys.CookieUsage)}</Title>
      <Text margin="0 0 var(--small-indent) 0">{t(TranslationKeys.PrivacyPolicy6_1)}</Text>
      <Title>{t(TranslationKeys.PrivacyPolicyUpdates)}</Title>
      <Text>{t(TranslationKeys.PrivacyPolicy7_1)}</Text>
    </>
  );
};

export default PrivacyPolicy;
