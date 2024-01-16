import { useTranslation } from 'react-i18next';
import placeholderBg from 'Assets/images/placeholder-bg.png';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Wrapper, Image, Text } from './Placeholder.styled';

const Placeholder: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Image src={placeholderBg} alt="" width={300} height={300} />
      <Text>{t(CommonLngKeys.TheresNothingHereYet, { ns: LocalesKeys.common })}</Text>
    </Wrapper>
  );
};

export default Placeholder;
