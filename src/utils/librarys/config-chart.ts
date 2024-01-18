import dynamic from "next/dynamic";

import { ApexOptions } from "apexcharts";

export const ChartDynamic = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const options: ApexOptions = {
  colors: ['#40B4AC'],
  chart: {
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
    foreColor: "#fff",
  },
  grid: {
    show: true,
    borderColor: "#505050",
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    axisBorder: {
      color: "#fff",
    },
    axisTicks: {
      color: "#fff",
    },
    categories: [
      "Usado",
      "Limite",
    ],
  },
  fill: {
    colors:['#40B4AC'],
    opacity: 0.3,
    type: "",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export const series = [
  { name: "Comparação", data: [3, 10] },
];
