import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DiagramProps } from 'types/props/DiagramProps';
import { Doughnut } from 'react-chartjs-2';

const Diagram: React.FC<DiagramProps> = ({ labels, datasets }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = { labels, datasets };

  return <Doughnut data={data} />;
};

export default Diagram;
