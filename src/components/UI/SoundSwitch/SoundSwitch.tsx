import { HiSpeakerWave } from 'react-icons/hi2';
import { HiSpeakerXMark } from 'react-icons/hi2';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { getSoundEnabled } from '../../../redux/settings/settingsSelectors';
import { toggleSound } from '../../../redux/settings/settingsSlice';
import { Wrapper, Button } from './SoundSwitch.styled';

const SoundSwitch: React.FC<{}> = () => {
  const soundEnabled = useAppSelector(getSoundEnabled);
  const dispatch = useAppDispatch();

  const toggle = () => (soundEnabled ? dispatch(toggleSound(false)) : dispatch(toggleSound(true)));

  return (
    <Wrapper>
      <Button type="button" onClick={toggle}>
        {soundEnabled ? <HiSpeakerWave /> : <HiSpeakerXMark />}
      </Button>
    </Wrapper>
  );
};

export default SoundSwitch;
