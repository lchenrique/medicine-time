/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import { useTheme } from '@/hooks/use-theme';
import { theme } from '@/styles/theme';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export interface IVerticalBarChartProps {
}

const VerticalBarChart = () => {
  const {theme:appTheme} = useTheme()
  const myTheme = appTheme as string

   const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  };
  
   const data:ChartOptions<any> = {
    labels,
    height:200,
    datasets: [
      {
        label: 'Patient entry',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: `hsl(${theme[myTheme as keyof typeof theme]?.primary})`,
      },
      {
        label: 'Patient discharge',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor:  `hsl(${theme[myTheme as keyof typeof theme]?.auxiliary})`,
      },
    ],
  };

  
  return (
    <Bar options={options} data={data} width={"40%"} height={300} />
  );
};

export {VerticalBarChart};