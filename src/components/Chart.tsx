// import {useState} from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { ChartType } from '../Types/interface';
import { Line } from 'react-chartjs-2';
import { accountData } from '../datas/chart';


ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {

const chartData:ChartType = {
      labels: accountData.map((data) => data.month), 
 datasets: [
   {
     label: "Sales",
     data: accountData.map((data) => +data.value),
     backgroundColor: "#e9eae7",
    borderColor: "rgba(0,0,0,0.86)",
     borderWidth: 2,
     tension: 0.5,
     pointRadius: 0
   }
 ]
}

  return (
    <section className='border-2y border-red-700y mt-5 min-h-[45vh] lg:min-h-[55vh] w-[100%]'>
        <Line data={chartData} options={{plugins:{title:{display:true}}, scales:{y:{beginAtZero:false, grid:{drawTicks:false}, ticks:{stepSize:10, padding:10, font:{weight:"bolder"}}}}}}/>
    </section>
  )
}

export default Chart
