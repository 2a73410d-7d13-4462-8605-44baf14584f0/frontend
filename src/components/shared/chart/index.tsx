import { IStatistics } from "@/utils/api-service/transform-url/interface/statistics";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register({
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
});

interface IProps {
  items: ChartData<"line">;
}

export const Charts = ({ items }: IProps) => {
  return <Chart type="line" className="mb-10" data={items}/>;
};
