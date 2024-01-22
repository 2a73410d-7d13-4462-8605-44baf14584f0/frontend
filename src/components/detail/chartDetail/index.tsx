import { Charts } from "@/components/shared/chart";
import { IStatistics } from "@/utils/api-service/transform-url/interface/statistics";
import { generateDateRange } from "@/utils/helper/generateDate";
import { ChartData } from "chart.js";

interface IProps {
    items?: IStatistics[]
}

export const ChartDetail = ({ items }:IProps) => {
  const dateRange = generateDateRange().reverse();
  const transformData = dateRange.map((date) => {
    const propsData = items?.find((stat) => stat.date.split("T")[0] == date);
    return {
      date,
      total_usage: propsData ? propsData.total_usage : 0,
    };
  });
  const data: ChartData<"line"> = {
    labels: transformData.map((date) => date.date),
    datasets: [
      {
        type: "line" as const,
        tension: 0.35,
        label: "URL PER DAY",
        borderColor: "#0CBC8B",
        borderWidth: 2,
        fill: false,
        data: transformData.map((url) => +url.total_usage),
      },
    ],
  };

  return <Charts items={data} />;
}