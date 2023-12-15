import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartProps } from 'types/props/ChartProps';

const Chart: React.FC<ChartProps> = ({ settings }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: settings.title,
      },
    },
  };

  const data = {
    labels: settings.labels,
    datasets: settings.datasets,
  };

  return <Bar options={options} data={data} />;
};

export default Chart;
