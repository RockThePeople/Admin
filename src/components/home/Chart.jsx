import React from 'react';
import './chart.css';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(){
    const data = [
    {
        name: '브루드커피',
        'Active User': 30,
    },
    {
        name: '카페라떼',
        'Active User': 10,
    },
    {
        name: '할리데이 모카',
        'Active User': 2,
    },
    {
        name: '허니밀크티',
        'Active User': 0,
    },
    {
        name: '핑크자몽블랙티',
        'Active User': 4,
    },
    {
        name: '듁스',
        'Active User': 2,
    },
    {
        name: '핫초코',
        'Active User': 1,
    },
];

class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
    return <div className="chart">
        <h3 className='chartTitle'>Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data = {data}>
                <XAxis dataKey={"name"} stroke='#274e17'/>
                <Line type="monotone" dataKey="Active User"/>
                <Tooltip/>
                CartesianGrid stroke="#274e17" strokeDasharray={"5 5"}
            </LineChart>
        </ResponsiveContainer>
    </div>
}