import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

export interface ISimplePieChartData {
  name: string
  value: number
}
interface Props {
  data: ISimplePieChartData[]
}
const COLORS = ['#117a65', '#d32f2f']
export const SimplePieChart = ({ data }: Props): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart  >
        <Pie data={data} dataKey="value" cx="0%" cy="50%" outerRadius={40} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="right"  />
      </PieChart>
    </ResponsiveContainer>
  )
}
