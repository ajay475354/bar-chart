import { Bar } from "react-chartjs-2";

import { Chart } from "chart.js/auto";

const labels = [
  "jan",
  "feb",
  "march",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const options = {
  Plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Expense tracker",
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "2020 expenses",
      data: [
        10000, 9000, 8000, 10200, 10500, 8400, 13000, 8900, 14600, 17000, 9000,
        12500,
      ],
      backgroundColor: "pink",
    },
    {
      label: "2021 expenses",
      data: [
        10020, 8000, 7000, 11200, 11500, 9400, 18000, 5900, 19600, 12000, 1000,
        2500,
      ],
      backgroundColor: "grey ",
    },
  ],
};

const App = () => {
  return (
    <div style={{ height: 400, width: 800 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default App;
