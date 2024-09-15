// ChartComponent.jsx
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Register the necessary components for Chart.js
Chart.register(...registerables);

const ChartComponent = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar', // You can change this to 'line', 'pie', etc.
      data: data,
      options: options,
    });
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
