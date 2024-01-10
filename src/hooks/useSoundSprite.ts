import useSound from 'use-sound';
import sounds from 'Assets/sounds/sounds.mp3';
import sprite from 'Assets/sounds/sprite';
import { useAppSelector } from './useAppSelector';
import { getSoundEnabled } from '../redux/settings/settingsSelectors';
import { getVolume } from '../redux/settings/settingsSelectors';

const useSoundSprite = () => {
  const soundEnabled = useAppSelector(getSoundEnabled);
  const volume = useAppSelector(getVolume);
  const [play] = useSound(sounds, { sprite, soundEnabled, volume });

  return { play };
};

export default useSoundSprite;
