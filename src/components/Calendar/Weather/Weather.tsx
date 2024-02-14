import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { WeatherProps } from 'types/props/WeatherProps';
import {
  Wrapper,
  TemperatureWrapper,
  ConditionWrapper,
  TemperatureValue,
  Icon,
} from './Weather.styled';

const Weather: React.FC<WeatherProps> = ({
  averageTemperature,
  weatherCondition,
  weatherIcon,
  maximumTemperature,
  minimumTemperature,
}) => {
  return (
    <Wrapper>
      <TemperatureWrapper>
        <HiArrowSmDown color="var(--accent-color)" />
        <TemperatureValue margin="0 20px 0 0" color="var(--accent-color)" fontSize="14px">
          {minimumTemperature}°C
        </TemperatureValue>
        <TemperatureValue>{averageTemperature}°C</TemperatureValue>
        <TemperatureValue margin="0 0 0 20px" color="var(--green-color)" fontSize="14px">
          {maximumTemperature}°C
        </TemperatureValue>
        <HiArrowSmUp color="var(--green-color)" />
      </TemperatureWrapper>
      <ConditionWrapper>
        <p>{weatherCondition}</p>
        <Icon src={weatherIcon} alt={`Weater icon - ${weatherCondition}`} />
      </ConditionWrapper>
    </Wrapper>
  );
};

export default Weather;
