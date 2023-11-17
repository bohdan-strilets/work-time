import { Text, Background, Icon, Slogan } from './Logo.styled';

const Logo: React.FC<{}> = () => {
  return (
    <>
      <Text>
        WorkTime
        <Background>
          <Icon />
        </Background>
      </Text>
      <Slogan>Every second matters</Slogan>
    </>
  );
};

export default Logo;
