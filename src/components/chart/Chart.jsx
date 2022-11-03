import './chart.scss'
import { LineChart,Line,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';

const data = [
  {
    name: 'Week 1',
    currentMonth: 1000,
    lastMonth: 3000
  },
  {
    name: 'Week 2',
    currentMonth: 3000,
    lastMonth: 2200
  },
  {
    name: 'Week 3',
    currentMonth: 2000,
    lastMonth: 3860
  },
  {
    name: 'Week 4',
    currentMonth: 3500,
    lastMonth: 3000
  }
];


export const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Revenue Graph</div>
           <AreaChart width={700} height={300} data={data}
              margin={{ top: 10, right: 40, left: 40, bottom: 0 }}>
              <defs>
                <linearGradient id="lastMonthColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CC66CC" stopOpacity={0.65}/>
                  <stop offset="95%" stopColor="#CC66CC" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="currentMonthColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0066FF" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#0066FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke='gray'/>
              <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
              <Tooltip/>
              <Legend />
              <Area type="monotone" dataKey="lastMonth" stroke="#993399" fillOpacity={1} fill="url(#lastMonthColor)" />
              <Area type="monotone" dataKey="currentMonth" stroke="#0066CC" fillOpacity={1} fill="url(#currentMonthColor)" />
            </AreaChart>
      {/* <ResponsiveContainer width="100%" aspect={ 3/1 }>
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
          <CartesianGrid strokeDasharray="0 1" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="lastMonth" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="currentMonth" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}
    </div>
  )
}
