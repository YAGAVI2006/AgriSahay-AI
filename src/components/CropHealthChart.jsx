import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function CropHealthChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#064e3b',
        titleFont: { size: 13, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b', font: { size: 11 } }
      },
      y: {
        min: 60,
        max: 100,
        grid: { color: '#e2e8f0' },
        ticks: { 
          color: '#64748b', 
          font: { size: 11 },
          callback: (value) => value + '%' 
        }
      }
    }
  };

  const data = {
    labels: ['June (Sowing)', 'July (Transplant)', 'August (Tillering)', 'September (Flowering)', 'October (Grain)', 'November (Harvest)'],
    datasets: [
      {
        label: 'Crop Health Index (%)',
        data: [82, 88, 94, 91, 96, 98],
        borderColor: '#10b981',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#047857',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5
      }
    ]
  };

  return (
    <div style={{ height: '220px', width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
}
