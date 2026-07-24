import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MarketPriceChart({ trendData }) {
  const labels = trendData?.labels || ['Week 1', 'Week 2', 'Week 3', 'Week 4 (Current)'];
  
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
        cornerRadius: 6,
        callbacks: {
          label: (context) => `${context.dataset.label}: ₹${context.raw}/Qtl`
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { 
        grid: { color: '#e2e8f0' },
        ticks: { callback: (val) => '₹' + val }
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Paddy (ADT 45)',
        data: trendData?.paddyPrices || [2150, 2190, 2220, 2280],
        borderColor: '#059669',
        backgroundColor: '#059669',
        tension: 0.3
      },
      {
        label: 'Groundnut (Pods)',
        data: trendData?.groundnutPrices || [6400, 6550, 6700, 6850],
        borderColor: '#d97706',
        backgroundColor: '#d97706',
        tension: 0.3
      },
      {
        label: 'Cotton (Kapas)',
        data: trendData?.cottonPrices || [7200, 7300, 7350, 7420],
        borderColor: '#0284c7',
        backgroundColor: '#0284c7',
        tension: 0.3
      }
    ]
  };

  return (
    <div style={{ height: '230px', width: '100%' }}>
      <Line options={options} data={data} />
    </div>
  );
}
