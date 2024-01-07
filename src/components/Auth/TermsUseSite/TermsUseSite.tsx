import { useTranslation } from 'react-i18next';
import { TermsUseSiteLngKeys } from 'types/locales/TermsUseSiteLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Title, Date, List, Accent } from './TermsUseSite.styled';

const TermsUseSite: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Date>
        {t(CommonLngKeys.LastUpdated, { ns: LocalesKeys.common })}: <Accent>06.01.2023</Accent>
      </Date>
      <Title>
        {t(TermsUseSiteLngKeys.UserRegistrationAndAccount, { ns: LocalesKeys.termsUseSite })}
      </Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph1, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph2, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.PurposeOfTheService, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph3, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph4, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.Notifications, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph5, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph6, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.DataManagement, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph7, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph8, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.SecurityMeasures, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph9, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph10, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.ResponsibleConduct, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph11, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph12, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.CookieUsage, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph13, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph14, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.PolicyUpdates, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph15, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <Title>{t(TermsUseSiteLngKeys.TerminationOfAccount, { ns: LocalesKeys.termsUseSite })}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph16, { ns: LocalesKeys.termsUseSite })}</p>
        </li>
      </List>
      <p>{t(TermsUseSiteLngKeys.TermsOfUseParagraph17, { ns: LocalesKeys.termsUseSite })}</p>
    </>
  );
};

export default TermsUseSite;
