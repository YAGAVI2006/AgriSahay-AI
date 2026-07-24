import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function WeatherSummaryChart({ forecastData }) {
  const labels = forecastData ? forecastData.map(d => d.day) : ['Today', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
  const tempValues = forecastData ? forecastData.map(d => d.tempMax) : [32, 30, 29, 33, 34, 35, 33];
  const rainValues = forecastData ? forecastData.map(d => d.rain) : [65, 80, 70, 20, 10, 5, 30];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { boxWidth: 12, font: { size: 11, weight: 'bold' } }
      },
      tooltip: {
        padding: 8,
        cornerRadius: 6
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#e2e8f0' } }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Max Temp (°C)',
        data: tempValues,
        backgroundColor: 'rgba(217, 119, 6, 0.85)',
        borderRadius: 6
      },
      {
        label: 'Rain Chance (%)',
        data: rainValues,
        backgroundColor: 'rgba(2, 132, 199, 0.85)',
        borderRadius: 6
      }
    ]
  };

  return (
    <div style={{ height: '220px', width: '100%' }}>
      <Bar options={options} data={data} />
    </div>
  );
}
