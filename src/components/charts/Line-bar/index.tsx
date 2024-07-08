/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
} from 'chart.js';
import {  Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['', '', '', '', '', '', ''];


export interface ILineBarChartProps {
  color?: any;
}

const LineBarChart = ({color}:ILineBarChartProps) => {


   const options = {
    responsive: true,
    maintainAspectRatio: false, 
    scales: {
      x: {
        display: false,
     },
     y: {
        display: false,
     }
    },
    plugins: {
      legend: {
        display: false,
        position: 'left' as const,
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
        // label: 'Patient entry',
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        fill: true,
        borderColor: `hsl(${color})`,
        backgroundColor: `hsl(${color},.2)`,
        lineTension: .1
      },
    ],
  };

  
  return (
    <Line options={options} data={data} width={"40%"} height={"100%"} />
  );
};

export {LineBarChart};