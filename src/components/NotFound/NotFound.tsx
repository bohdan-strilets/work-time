import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LinkButton from 'components/UI/LinkButton';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { NotFoundLngKeys } from 'types/locales/NotFoundLngKeys';
import {
  Wrapper,
  LeftSide,
  ErrorCode,
  Title,
  RightSide,
  Subbtitle,
  List,
  Item,
} from './NotFound.styled';

const NotFound: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <LeftSide>
        <ErrorCode>404</ErrorCode>
        <Title>{t(NotFoundLngKeys.PageNotFound, { ns: LocalesKeys.notFound })}</Title>
      </LeftSide>
      <RightSide>
        <Subbtitle>{t(NotFoundLngKeys.NotFoundParagraph1, { ns: LocalesKeys.notFound })}</Subbtitle>
        <List>
          <Item>
            <LinkButton onClick={() => navigate('/')}>
              {t(CommonLngKeys.Home, { ns: LocalesKeys.common })}
            </LinkButton>
          </Item>
          <Item>
            <LinkButton onClick={() => navigate('/calendar')}>
              {t(CommonLngKeys.Calendar, { ns: LocalesKeys.common })}
            </LinkButton>
          </Item>
        </List>
      </RightSide>
    </Wrapper>
  );
};

export default NotFound;
