'use client'
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const monthTickFormatter = (tick: string) => {
  const date = new Date(tick);

  return date.getDate();
};

const renderQuarterTick = (tickProps: any) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

export default function SimpleCharts(stats:any) {
    let dataArr = []

    for (let i = 0; i < 15; i++ ){
        const dataObj = {
            date: Number(Object.keys(stats.stats.cases[0])),
            cases: stats.stats.cases[i]/100,
            death: stats.stats.dead[i],
            recovered: stats.stats.recover[i]
        }
        dataArr.push(dataObj)
    }
  
    console.log(dataArr)

  return (
    <BarChart
      width={760}
      height={420}
      data={dataArr}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
      <XAxis
        dataKey="date"
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={renderQuarterTick}
        height={1}
        scale="band"
        xAxisId="quarter"
      /> */}
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="cases" fill="#8884d8" />
      <Bar dataKey="death" fill="#82ca9d" />
      <Bar dataKey="recovered" fill="#ffc658" />
    </BarChart>
  );
}
