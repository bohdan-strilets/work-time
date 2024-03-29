import Loader from 'components/UI/Loader';
import { DialogWindowProps } from 'types/props/DialogWindowProps';
import { Text, List, Item, Button } from './DialogWindow.styled';

const DialogWindow: React.FC<DialogWindowProps> = ({
  text,
  positiveBtnLabel,
  negativeBtnLabel,
  handlePositiveClick,
  handleNegativeClick,
  isLoader,
}) => {
  return (
    <>
      {text && <Text>{text}</Text>}
      {isLoader && <Loader />}
      <List>
        <Item>
          <Button type="button" onClick={handleNegativeClick} className="negative">
            {negativeBtnLabel}
          </Button>
        </Item>
        <Item>
          <Button type="button" onClick={handlePositiveClick} className="positive">
            {positiveBtnLabel}
          </Button>
        </Item>
      </List>
    </>
  );
};

export default DialogWindow;
