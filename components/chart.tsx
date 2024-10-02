import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    pointRadius: number;
    pointBorderWidth: number;
  }[];
}

interface LineChartProps {
  labels: string[];
  data: number[];
}

export const LineChart: React.FC<LineChartProps> = (props) => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const formattedData: ChartData = {
      labels: props.labels, // e.g., ['Jan', 'Feb', 'Mar']
      datasets: [
        {
          label: 'Interest Over Time',
          data: props.data, // e.g., [65, 59, 80]
          borderColor: '#000', // Black line color
          backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background for a minimalist look
          pointRadius: 3, // Small dots on the graph
          pointBorderWidth: 1, // Thin border for the points
        },
      ],
    };
    setChartData(formattedData);
  }, [props.labels, props.data]);

  if (!chartData) {
    return <div>Loading chart...</div>;
  }

  return (
    <div className='h-60'>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false, // Hide legend for a cleaner look
            },
            tooltip: {
              enabled: true, // Minimalist tooltip
            },
            title: {
              display: false, // No title for a minimalist look
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide grid lines for a minimalist appearance
              },
              ticks: {
                color: '#000', // Black color for x-axis labels
              },
            },
            y: {
              grid: {
                display: false, // Hide y-axis grid lines
              },
              ticks: {
                color: '#000', // Black color for y-axis labels
              },
            },
          },
          elements: {
            line: {
              tension: 0.4, // Smooth curves
              borderWidth: 2, // Thicker line for better visibility
            },
          },
        }}
      />
    </div>
  );
};
