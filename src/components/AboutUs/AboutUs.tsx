import Logo from 'components/UI/Logo';
import ContactForm from 'components/Forms/ContactForm';
import {
  Wrapper,
  TopSide,
  LogoWrapper,
  Data,
  LeftSide,
  Text,
  RightSide,
  Title,
} from './AboutUs.styled';

const AboutUs: React.FC<{}> = () => {
  return (
    <Wrapper>
      <TopSide>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </TopSide>
      <Data>
        <LeftSide>
          <Title textAlign="left">
            Welcome to WorkTime – your reliable companion in time tracking and everyday
            productivity!
          </Title>
          <Text margin="var(--medium-indent) 0">
            WorkTime is an innovative web service designed for those who value their time and want
            to efficiently manage workdays, shifts, and income. Our primary goal is to provide you
            with a tool that makes time tracking easy and intuitive.
          </Text>
          <Title textAlign="left">Key features of WorkTime</Title>
          <Text margin="var(--medium-indent) 0 10px 0">
            Tracking Workdays and Shifts: Our service allows you to easily register your workdays
            and shifts. Simply mark when you start and finish work, and WorkTime will automatically
            save this information for future analysis.
          </Text>
          <Text margin="0 0 10px 0">
            Calculating Daily and Monthly Earnings: Our integrated earnings calculator gives you
            instant access to information about your income for each worked day and the entire
            month. This enables you to transparently track the financial aspect of your work.
          </Text>
          <Text margin="0 0 var(--medium-indent) 0">
            Statistics and Work Activity Analysis: WorkTime generates detailed reports on your
            workdays and shifts. Analyze your productivity, identify trends, and plan your time
            based on real data.
          </Text>
          <Title textAlign="left">Why you should choose WorkTime</Title>
          <Text margin="var(--medium-indent) 0 10px 0">
            Ease of Use: Our interface is designed to allow even beginners to quickly and easily
            manage their work time.
          </Text>
          <Text margin="0 0 10px 0">
            Data Reliability: WorkTime ensures the security of your records and provides access to
            reliable and accurate data about your work activity.
          </Text>
          <Text margin="0 0 var(--medium-indent) 0">
            Time and Income Optimization: With WorkTime, you can efficiently manage your work time,
            leading to increased income and an improved overall quality of life.
          </Text>
          <Text margin="var(--medium-indent) 0">
            Don't miss the opportunity to make your work more manageable and profitable. Join
            WorkTime today – time tracking will become a straightforward and engaging process!
          </Text>
        </LeftSide>
        <RightSide>
          <Title fontSize={32} margin="0 0 var(--large-indent) 0">
            Connect with us
          </Title>
          <ContactForm />
        </RightSide>
      </Data>
    </Wrapper>
  );
};

export default AboutUs;
