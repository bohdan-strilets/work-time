import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DiagramProps } from 'types/props/DiagramProps';
import { Doughnut } from 'react-chartjs-2';
import { Wrapper } from './Diagram.styled';

const Diagram: React.FC<DiagramProps> = ({ labels, datasets, width }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = { labels, datasets };

  return (
    <Wrapper width={width}>
      <Doughnut data={data} />
    </Wrapper>
  );
};

export default Diagram;
