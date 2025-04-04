import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Users, DollarSign, FileText } from 'lucide-react';

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

function Dashboard() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Paid users',
        data: [54, 43, 30, 32, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#3A7D90',
        backgroundColor: 'rgba(58, 125, 144, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Unpaid users',
        data: [3, 16, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgb(46, 74, 98)',
        backgroundColor: 'rgba(46, 74, 98, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Orders',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgb(76, 175, 80)',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 3,
      },
    },
  };

  const stats = [
    {
      title: 'Total Users',
      value: '190',
      icon: Users,
    },
    {
      title: 'Total orders',
      value: '45',
      icon: DollarSign,
    },
    {
      title: 'Total leads',
      value: '1',
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-200 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-400">{stat.title}</h3>
                  <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="h-[400px]">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;