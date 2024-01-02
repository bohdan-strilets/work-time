import enFlag from 'Assets/images/en.png';
import uaFlag from 'Assets/images/ua.png';
import plFlag from 'Assets/images/pl.png';
import useClickOutside from 'hooks/useClickOutside';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getLanguage } from '../../../redux/settings/settingsSelectors';
import { changeLanguage } from '../../../redux/settings/settingsSlice';
import { LanguageEnum } from 'types/enums/LanguageEnum';
import { Wrapper, Button, Image, List, Item } from './LanguageSelection.styled';

const LanguageSelection: React.FC<{}> = () => {
  const { divRef, isOpen, toggle } = useClickOutside();
  const dispatch = useAppDispatch();
  const language = useAppSelector(getLanguage);

  const handleChangeLanguage = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = e.currentTarget.dataset.language as LanguageEnum;
    if (value) {
      dispatch(changeLanguage(value));
      toggle();
    }
  };

  return (
    <Wrapper ref={divRef}>
      <Button type="button" onClick={toggle}>
        {language === LanguageEnum.en && <Image src={enFlag} alt="EN Flag" />}
        {language === LanguageEnum.pl && <Image src={plFlag} alt="PL Flag" />}
        {language === LanguageEnum.ua && <Image src={uaFlag} alt="UA Flag" />}
      </Button>
      {isOpen && (
        <List>
          <Item data-language={LanguageEnum.en} onClick={handleChangeLanguage}>
            <Image src={enFlag} alt="EN Flag" />
          </Item>
          <Item data-language={LanguageEnum.pl} onClick={handleChangeLanguage}>
            <Image src={plFlag} alt="PL Flag" />
          </Item>
          <Item data-language={LanguageEnum.ua} onClick={handleChangeLanguage}>
            <Image src={uaFlag} alt="UA Flag" />
          </Item>
        </List>
      )}
    </Wrapper>
  );
};

export default LanguageSelection;
