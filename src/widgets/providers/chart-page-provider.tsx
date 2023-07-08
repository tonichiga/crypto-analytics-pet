"use client";
import ChartArea from "../charts/linear-chart";
import { useState } from "react";
import cryptoCompateApi from "@/api/cryptocompare";

const initialOptions = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      type: "datetime",
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: true,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        highlightDataSeries: false,
      },
      x: {
        show: true,
        format: "dd MMM",
        formatter: undefined,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName: string) => seriesName,
        },
      },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
      marker: {
        show: true,
      },
      items: {
        display: "flex",
      },
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
  },
  series: [
    {
      data: [],
    },
  ],
};

const ChartPageProvider = () => {
  const [input, setInput] = useState<string>("");
  const [chartData, setChartData] = useState<any>(initialOptions);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const socialHistory = await cryptoCompateApi.getSocialStats(input);
    const seriesList = socialHistory.map((item) => [
      item.time * 1000,
      item.posts,
    ]);

    const config = {
      series: [
        {
          data: seriesList,
          name: "Twitter posts",
        },
      ],
    };

    setChartData((prev: any) => ({
      ...initialOptions,
      series: config.series,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  return (
    <div>
      <form className="mb-20" onSubmit={handleSubmit} onChange={handleChange}>
        <label className="mb-4 block">Enter symbol name:</label>
        <input
          className="block mb-3 h-[40px] w-[150px] px-[8px] text-black"
          type="text"
          name="symbol"
          placeholder="ETH"
        />
        <button
          className="border px-4 py-2 rounded-md"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
      <ChartArea data={chartData} />
    </div>
  );
};

export default ChartPageProvider;
