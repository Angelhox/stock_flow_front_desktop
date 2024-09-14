/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Chart as ChartJS, ChartData, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

export interface IPieChartDataItem {
  label: string
  value: number
}
export interface ChartProps {
  chartData: IPieChartDataItem[]
  label: string
}

const options: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000, // Duración de la animación en milisegundos
    easing: 'easeInOutQuad' // Tipo de animación
  },
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

export function PieChart({ chartData, label }: ChartProps): JSX.Element {
  const [data, setData] = useState<ChartData<'pie', number[], unknown>>({
    labels: chartData.map((dataItem) => dataItem.label),
    datasets: [
      {
        label: label,
        data: chartData.map((dataItem) => dataItem.value),
        // backgroundColor: [
        //   '#FF5733', // Naranja
        //   '#3498DB', // Azul
        //   '#2ECC71', // Verde
        //   '#9B59B6', // Morado
        //   '#F1C40F', // Amarillo
        //   'rgb(255, 99, 71)', // Rojo
        //   'rgb(0, 128, 0)', // Verde
        //   'rgb(128, 0, 128)', // Púrpura
        //   'rgba(0, 0, 255, 0.5)', // Azul con transparencia
        //   'hsl(240, 100%, 50%)', // Azul
        //   'hsla(120, 100%, 50%, 0.5)' // Verde con transparencia
        // ],
        backgroundColor: ['#d32f2f', '#0057A0'],
        borderWidth: 2
      }
    ]
  })

  return <Pie data={data} options={options} />
}
