"use client";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartData = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
  series: [
    {
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const ChartArea = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div>
      <Chart
        type="line"
        options={data.options}
        series={data.series}
        // width={500}
      />
    </div>
  );
};

export default ChartArea;
