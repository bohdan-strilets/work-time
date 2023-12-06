import { Title, Text, Accent, List } from './PrivacyPolicy.styled';

const PrivacyPolicy: React.FC<{}> = () => {
  return (
    <>
      <Title>Privacy Policy for WorkTime</Title>
      <Text margin="var(--small-indent) 0 var(--small-indent) 0">
        Last Updated: <Accent>06.01.2023</Accent>
      </Text>
      <Title>Collected Personal Information</Title>
      <Text margin="0 0 5px 0">WorkTime collects the following personal information:</Text>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>Full Name</p>
        </li>
        <li>
          <p>Password</p>
        </li>
        <li>
          <p>Email Address</p>
        </li>
        <li>
          <p>Gender</p>
        </li>
        <li>
          <p>Work-related information, including company name, position, and salary</p>
        </li>
        <li>
          <p>Personal photo</p>
        </li>
        <li>
          <p>Information regarding work shifts</p>
        </li>
      </List>
      <Title>Purpose of Data Collection</Title>
      <Text margin="0 0 5px 0">The collected data is used solely for the following purposes:</Text>
      <List margin="0 0 var(--small-indent) var(--medium-indent)">
        <li>
          <p>Time tracking of work and shifts</p>
        </li>
        <li>
          <p>Sending notifications related to the site's functionality</p>
        </li>
      </List>
      <Title>Third-Party Data Sharing</Title>
      <Text margin="0 0 var(--small-indent) 0">
        At present, user data is not shared with any third parties.
      </Text>
      <Title>Data Security</Title>
      <Text margin="0 0 var(--small-indent) 0">
        We implement security measures to protect your personal data. (Include additional details
        about security measures, e.g., data encryption.)
      </Text>
      <Title>Management of Personal Data</Title>
      <Text margin="0 0 var(--small-indent) 0">
        You have the right to modify and delete your personal data through your user account on our
        website.
      </Text>
      <Title>Cookie Usage</Title>
      <Text margin="0 0 var(--small-indent) 0">
        WorkTime uses cookies only for transmitting the refresh token.
      </Text>
      <Title>Privacy Policy Updates</Title>
      <Text>
        The privacy policy may be periodically updated. The latest update is reflected at the top of
        the document.
      </Text>
    </>
  );
};

export default PrivacyPolicy;
