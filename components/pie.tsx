import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Skeleton } from './ui/skeleton';

// Register Pie chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
}

export const PieChart: React.FC<PieChartProps> = (props) => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const formattedData = {
      labels: props.labels, 
      datasets: [
        {
          data: props.data, // e.g., [20, 15, 25, 10, 30]
          backgroundColor: [
            'rgba(0, 0, 0, 0.8)', // Black
            'rgba(128, 128, 128, 0.8)', // Dark gray
            'rgba(64, 64, 64, 0.8)', // Medium gray
            'rgba(192, 192, 192, 0.8)', // Light gray
            'rgba(255, 255, 255, 0.8)', // White
          ],
          borderColor: 'transparent', // Remove border around pie sections
          hoverBackgroundColor: [
            'rgba(0, 0, 0, 1)', // Darker black on hover
            'rgba(128, 128, 128, 1)', // Darker dark gray on hover
            'rgba(64, 64, 64, 1)', // Darker medium gray on hover
            'rgba(192, 192, 192, 1)', // Darker light gray on hover
            'rgba(255, 255, 255, 1)', // Darker white on hover
          ],
        },
      ],
    };
    setChartData(formattedData);
  }, [props.labels, props.data]);

  if (!chartData) {
    return <div><Skeleton/></div>;
  }

  return (
    <div className="w-full h-full ">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Ensure chart fills container
          plugins: {
            legend: {
              display: true, // Show legend for categories
              labels: {
                color: '#000', // Black text for legend
              },
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark tooltip background
              titleColor: '#fff', // White text in tooltip
              bodyColor: '#fff', // White body text in tooltip
            },
          },
        }}
      />
    </div>
  );
};
