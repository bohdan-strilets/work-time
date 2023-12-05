import { Text } from './Greetings.styled';

const Greetings: React.FC<{}> = () => {
  return (
    <>
      <Text>
        Welcome to WorkTime – your reliable companion in time tracking and everyday productivity!
      </Text>
      <Text>
        WorkTime is an innovative web service designed for those who value their time and want to
        efficiently manage workdays, shifts, and income. Our primary goal is to provide you with a
        tool that makes time tracking easy and intuitive.
      </Text>
      <Text>
        Please note that, before utilizing all the features of WorkTime, it's necessary to activate
        your account. If you've logged in through Google, your email address is already activated,
        and you can start using the service immediately.
      </Text>
      <Text>
        For other users, please confirm your email address to activate your account. We will send
        you an email with activation instructions. Kindly check your mailbox, including the "Spam"
        folder, if you don't find the notification in your main inbox.
      </Text>
      <Text>
        Thank you for your understanding, and welcome to the world of efficient time tracking with
        WorkTime!
      </Text>
    </>
  );
};

export default Greetings;
