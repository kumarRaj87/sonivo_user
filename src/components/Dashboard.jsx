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
import { MdPhoneForwarded } from "react-icons/md";
import { TbArrowFork } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";
import { PiPhonePlusBold } from "react-icons/pi";
import { TbPhoneRinging } from "react-icons/tb";
import {
  Contact,
  ArrowDownUp
} from 'lucide-react'
import { useEffect, useState } from 'react';
import Loader from '../loader/Loader';

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Completed',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#3A7D90',
        backgroundColor: 'rgba(58, 125, 144, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Initiated',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
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
      title: 'Agent Incoming',
      value: '7',
      icon: TbPhoneRinging,
    },
    {
      title: 'Total Campaign',
      value: '0',
      icon: MdPhoneForwarded,
    },
    {
      title: 'Total Devices',
      value: '1',
      icon: PiPhonePlusBold,
    },
    {
      title: 'Total task(s)',
      value: '2',
      icon: FiCheckCircle,
    },
    {
      title: 'Total flow response(s)',
      value: '2',
      icon: ArrowDownUp,
    },
    {
      title: 'Total contact(s)',
      value: '2',
      icon: Contact,
    },
  ];

  return (
    <div className="min-h-screen bg-primary-200 p-2 w-full">
      <div className="gap-5 md:flex-row justify-between items-center mb-5 flex flex-col">
        <div className="sm:h-[330px] h-[270px] md:p-6 p-2 md:w-1/2 w-full bg-background rounded-lg flex flex-col justify-between items-start">
          <div className='w-full items-center gap-3 justify-start flex px-3 py-2'>
            <TbArrowFork className='text-primary-500' size={20} />
            <p className='text-primary-300 text-xl font-semibold'>Agent Callforce</p>
          </div>
          <Line data={data} options={options} />
        </div>
        <div className="sm:h-[330px] h-[270px] md:w-1/2 w-full md:p-6 p-2 bg-background rounded-lg flex flex-col justify-between items-start w">
          <div className='w-full items-center gap-3 justify-start flex px-3 py-2'>
            <MdPhoneForwarded className='text-primary-500' size={20} />
            <p className='text-primary-300 text-xl font-semibold'>Broadcast Logs</p>
          </div>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="w-full bg-background p-4 gap-2 flex-col flex justify-start items-start">
        {stats.map((stat, index) => (
          <div key={index} className="w-full justify-between items-center flex border-primary-200 border-b-[1px]">
            <div className="flex items-center gap-4 w-full justify-start">
              <stat.icon className="w-10 h-10 text-primary-300" />
              <h3 className="text-sm font-semibold text-primary-300 w-full">{stat.title}</h3>
              <div className='w-full flex justify-end items-center'>
                <p className="text-lg font-semibold text-primary-300">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;