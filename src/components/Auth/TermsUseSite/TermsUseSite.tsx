import { useTranslation } from 'react-i18next';
import { TranslationKeys } from 'types/enums/TranslationKeys';
import { Title, Date, List, Accent } from './TermsUseSite.styled';

const TermsUseSite: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Date>
        {t(TranslationKeys.LastUpdated)}: <Accent>06.01.2023</Accent>
      </Date>
      <Title>{t(TranslationKeys.UserRegistrationAndAccount)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse1_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse1_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.PurposeOfTheService)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse2_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse2_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.Notifications)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse3_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse3_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.DataManagement)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse4_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse4_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.SecurityMeasures)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse5_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse5_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.ResponsibleConduct)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse6_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse6_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.CookieUsage)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse7_1)}</p>
        </li>
        <li>
          <p>{t(TranslationKeys.TermsOfUse7_2)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.PolicyUpdates)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse8_1)}</p>
        </li>
      </List>
      <Title>{t(TranslationKeys.TerminationOfAccount)}</Title>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>{t(TranslationKeys.TermsOfUse9_1)}</p>
        </li>
      </List>
      <p>{t(TranslationKeys.TermsOfUse10)}</p>
    </>
  );
};

export default TermsUseSite;
