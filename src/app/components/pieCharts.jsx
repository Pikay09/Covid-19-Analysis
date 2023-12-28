'use client'

import {useEffect, useState} from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { getAllWorldCases } from "../tools";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

export default function PieRecharts(searchInput) {

    let msiaToday = `https://disease.sh/v3/covid-19/countries/${searchInput.searchInput}?strict=true`

    const [data, setData] = useState(data01)
    const [res, setRes] = useState({})
    const [input, setInput] = useState("MY")

    useEffect(()=>{
        getAllWorldCases(msiaToday).then((res)=>{
            if(res){
                const dataarr = [
                    { name: "Population", value: res.population, fill: 'skyblue' },
                    { name: "Cases", value: res.cases, fill: 'orange' },
                    { name: "Recovered", value: res.recovered , fill: 'green'},
                    { name: "Active", value: res.active , fill: 'red'}
                  ];
                  setData(dataarr)
                  setRes(res)
                  console.log(res)
            }
        })
    },[msiaToday, searchInput])

  return (
    <div className="">
            <br/>
            <br/>
            <h1>Country : {res.country}</h1>
        <PieChart width={1000} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
        <h1>new cases today : {res.todayCases} </h1>
        <h1>new deaths today : {res.todayDeaths} </h1>
        <br/>
        <br/>
    </div>
   
  );
}
