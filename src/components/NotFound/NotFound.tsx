import { useNavigate } from 'react-router-dom';
import LinkButton from 'components/UI/LinkButton';
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

  return (
    <Wrapper>
      <LeftSide>
        <ErrorCode>404</ErrorCode>
        <Title>Page not found</Title>
      </LeftSide>
      <RightSide>
        <Subbtitle>
          Sorry, the requested page is not found. Perhaps you entered the wrong URL or the page has
          been deleted.
        </Subbtitle>
        <List>
          <Item>
            <LinkButton onClick={() => navigate('/')}>Home</LinkButton>
          </Item>
          <Item>
            <LinkButton onClick={() => navigate('/calendar')}>Calendar</LinkButton>
          </Item>
        </List>
      </RightSide>
    </Wrapper>
  );
};

export default NotFound;
