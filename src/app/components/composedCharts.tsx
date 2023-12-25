'use client'

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";



export default function ComposeRecharts(stats:any) {
    let dataArr = []

    for (let i = 0; i < 30; i++ ){
        const dataObj = {
            name: i+1,
            cases: stats.stats.cases[i]/100,
            dead: stats.stats.dead[i],
            recover: stats.stats.recover[i]
        }
        dataArr.push(dataObj)
    }
  
    console.log(dataArr)

  return (
    <ComposedChart
      width={800}
      height={420}
      data={dataArr}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="cases" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="recover" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="dead" stroke="#ff7300" />
    </ComposedChart>
  );
}
