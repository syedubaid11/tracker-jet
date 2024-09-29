import React, { useEffect, useState } from 'react';
import axios from 'axios'
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
import { headers } from 'next/headers';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

interface LineChartProps{
    labels:string[],
    data:number[]
}


export const LineChart: React.FC <LineChartProps> = (props) => {
  
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
 
    const fetchData = async () => {
      try {
        
        
        // { labels: ['Jan', 'Feb', 'Mar'], data: [65, 59, 80] }
        const formattedData: ChartData = {
          labels: props.labels, // e.g., ['Jan', 'Feb', 'Mar']
          datasets: [
            {
              label: 'API Data',
              data: props.data, // e.g., [65, 59, 80]
              borderColor: 'rgba(75,192,192,1)',
              backgroundColor: 'rgba(75,192,192,0.2)',
            },
          ],
        };
        
        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchData();
  }, []);

  // If data is not available yet, show a loading message
  if (!chartData) {
    return <div>Loading chart...</div>;
  }

  return (
    <div>
      <h2>API Line Chart</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Line Chart Example',
            },
          },
        }}
      />
    </div>
  );
};

