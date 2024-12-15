import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Chart.js 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = ({ todos }) => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const completedCounts = Array(7).fill(0); // 각 요일별 완료된 할 일 수

  todos.forEach((todo) => {
    const dayIndex = new Date(todo.date).getDay();
    completedCounts[dayIndex] += todo.completed ? 1 : 0;
  });

  const data = {
    labels: days,
    datasets: [
      {
        label: "완료된 할 일",
        data: completedCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "주간 완료된 할 일",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Y축 간격을 1로 설정
        },
      },
    },
  };

  return (
    <div>
      <h2>주간 통계</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Statistics;
