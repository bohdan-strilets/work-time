import { useTranslation } from 'react-i18next';
import Logo from 'components/UI/Logo';
import ContactForm from 'components/Forms/ContactForm';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { AboutUsLngKeys } from 'types/locales/AboutUsLngKeys';
import { TopSide, LogoWrapper, Data, LeftSide, Text, RightSide, Title } from './AboutUs.styled';

const AboutUs: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <TopSide>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </TopSide>
      <Data>
        <LeftSide>
          <Title textAlign="left">
            {t(AboutUsLngKeys.WelcomeToWorkTime, { ns: LocalesKeys.aboutUs })}
          </Title>
          <Text margin="var(--medium-indent) 0">
            {t(AboutUsLngKeys.Paragraph1, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Title textAlign="left">
            {' '}
            {t(AboutUsLngKeys.KeyFeaturesOfWorkTime, { ns: LocalesKeys.aboutUs })}
          </Title>
          <Text margin="var(--medium-indent) 0 10px 0">
            {t(AboutUsLngKeys.Paragraph2, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Text margin="0 0 10px 0">
            {t(AboutUsLngKeys.Paragraph3, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Text margin="0 0 var(--medium-indent) 0">
            {t(AboutUsLngKeys.Paragraph4, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Title textAlign="left">
            {' '}
            {t(AboutUsLngKeys.WhyYouShouldChooseWorkTime, { ns: LocalesKeys.aboutUs })}
          </Title>
          <Text margin="var(--medium-indent) 0 10px 0">
            {t(AboutUsLngKeys.Paragraph5, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Text margin="0 0 10px 0">
            {t(AboutUsLngKeys.Paragraph6, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Text margin="0 0 var(--medium-indent) 0">
            {t(AboutUsLngKeys.Paragraph7, { ns: LocalesKeys.aboutUs })}
          </Text>
          <Text margin="var(--medium-indent) 0">
            {t(AboutUsLngKeys.Paragraph8, { ns: LocalesKeys.aboutUs })}
          </Text>
        </LeftSide>
        <RightSide>
          <Title fontSize={32} margin="0 0 var(--large-indent) 0">
            {t(AboutUsLngKeys.ConnectWithUs, { ns: LocalesKeys.aboutUs })}
          </Title>
          <ContactForm />
        </RightSide>
      </Data>
    </div>
  );
};

export default AboutUs;
