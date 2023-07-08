"use client";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartArea = ({ data }: { data: any }) => {
  return (
    <div>
      <Chart
        type="area"
        options={data.options}
        series={data.series}
        height={700}

        // width={500}
      />
    </div>
  );
};

export default ChartArea;
