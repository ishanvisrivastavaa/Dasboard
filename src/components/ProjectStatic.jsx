import React, { useRef, useEffect } from "react";
import Chart from "react-apexcharts";

const ProjectStatic = () => {
  const chartRef = useRef(null);

  const chartOptions = {
    chart: {
      height: 300,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Income",
        data: [
          18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000,
          60000, 70000,
        ],
      },
      {
        name: "Outcome",
        data: [
          27000, 38000, 60000, 77000, 40000, 50000, 49000, 29000, 42000, 27000,
          42000, 50000,
        ],
      },
    ],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      strokeDashArray: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.8,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },
    yaxis: {
      labels: {
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
  };

  return (
    <div className="flex flex-col justify-center w-76 bg-white p-3 rounded-xl">
      <div className="flex justify-end pr-6 items-center gap-x-4">
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-blue-600 rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">
            Income
          </span>
        </div>
        <div className="inline-flex items-center">
          <span className="size-2.5 inline-block bg-purple-600 rounded-sm me-2"></span>
          <span className="text-[13px] text-gray-600 dark:text-neutral-400">
            Outcome
          </span>
        </div>
      </div>

      <Chart
        className="-ml-3 w-68 pr-2"
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height={180}
      />
    </div>
  );
};

export default ProjectStatic;
