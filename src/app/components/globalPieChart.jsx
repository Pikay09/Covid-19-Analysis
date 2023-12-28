'use client'

import {useEffect, useState} from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { countryDataFetcher } from "../tools";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];


export default function GlobalPieRecharts() {

    let globalCaselUrl = 'https://disease.sh/v3/covid-19/all'

    const [res, setRes] = useState()
    const [dataArray, setDataArray] = useState(data01)

    useEffect(()=>{
        countryDataFetcher(globalCaselUrl).then((res)=>{
            if(res){
                const dataarr = [
                    { name: "Population", value: res.population, fill: 'skyblue' },
                    { name: "Cases", value: res.cases, fill: 'orange' },
                    { name: "Recovered", value: res.recovered , fill: 'green'},
                    { name: "Active", value: res.active , fill: 'red'}
                  ];
                  setDataArray(dataarr)
                  setRes(res)
                  console.log(res)
            }
        })
    },[])

    const Loaded =()=>{
        return (
            <div>
                <br/>
                <br/>
                <h1>World live statistics {res.country}</h1>
            <PieChart width={690} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={dataArray}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
            <h1>New cases today : {res.todayCases} </h1>
            <h1>New deaths today : {res.todayDeaths} </h1>
            <h1>Population : {res.population/1000000} Million</h1>
            <h1>Recovered : {res.recovered/1000000} Million</h1>
            <h1>Active cases : {res.active/1000000} Million</h1>
            <br/>
            <br/>
            </div>
           
          );
    }
  
    return res ? <Loaded/> : <h1>Loading ...</h1>
}
