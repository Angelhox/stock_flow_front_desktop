/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  Plugin,
  ChartOptions,
  ChartData
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState } from 'react'
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)
export interface IDouhgnutChartDataItem {
  label: string
  value: number
}
export interface ChartProps {
  chartData: IDouhgnutChartDataItem[]
  label: string
}
// Plugin to display the total in the center of the doughnut chart
const centerTextPlugin: Plugin<'doughnut'> = {
  id: 'centerTextPlugin',
  afterDraw: (chart) => {
    const { ctx, width, height } = chart
    const data = chart.data.datasets[0].data as number[]
    const total = data.reduce((acc, curr) => acc + (curr || 0), 0)
    const text = total.toString()
    ctx.save()

    ctx.font = 'bold 20px Arial'
    ctx.fillStyle = '#000'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, width / 2, height / 2)
    ctx.restore()
  }
}
const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        color: 'black',
        font: {
          size: 14
        }
      }
    },
    tooltip: {
      enabled: true,
      backgroundColor: 'rgba(0,0,0,0.7)',
      titleFont: {
        size: 20
      },
      bodyFont: {
        size: 16
      }
    },
    datalabels: {
      // formatter: (value, context) => {
      //   const data = context.chart.data.datasets[0].data as number[]
      //   const total = data.reduce((acc, curr) => acc + (curr || 0), 0)
      //   const percentage = ((value / total) * 100).toFixed(2) + '%'
      //   return `${value}\n ${percentage}`
      // },
      color: '#fff',
      align: 'center',
      textAlign: 'center',
      font: {
        size: 14
      }
    }
  },
  layout: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}
export const DoughnutChart = ({ chartData, label }: ChartProps): JSX.Element => {
  const [data, setData] = useState<ChartData<'doughnut', number[], unknown>>({
    labels: chartData.map((dataItem) => dataItem.label),
    datasets: [
      {
        label: label,
        data: chartData.map((dataItem) => dataItem.value),
        backgroundColor: [
          '#FF5733', // Naranja
          '#3498DB', // Azul
          '#2ECC71', // Verde
          '#9B59B6', // Morado
          '#F1C40F', // Amarillo
          'rgb(255, 99, 71)', // Rojo
          'rgb(0, 128, 0)', // Verde
          'rgb(128, 0, 128)', // Púrpura
          'rgba(0, 0, 255, 0.5)', // Azul con transparencia
          'hsl(240, 100%, 50%)', // Azul
          'hsla(120, 100%, 50%, 0.5)' // Verde con transparencia
        ],
        borderWidth: 2
      }
    ]
  })
  return (
    <Doughnut
      data={data}
      options={options}
      // plugins={[centerTextPlugin]}
    />
  )
}
