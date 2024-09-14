import './QuickInformation.scss'
import { IPieChartDataItem, PieChart } from '@renderer/components/shared/Charts/PieChart/PieChart'
import { PiPackageDuotone } from 'react-icons/pi'
import { PiUsersDuotone } from "react-icons/pi";
import { PiUserCheckDuotone } from "react-icons/pi";
const doughnutChartData: IPieChartDataItem[] = [
  { label: 'Entradas', value: 78 },
  { label: 'Salidas', value: 22 }
]

export const QuickInformation = (): JSX.Element => {
  return (
    <div className="QuickInformation">
      {/* <h3>InformationCards</h3> */}
      <div className="scroll-information-cards ">
        <div className="information-cards-container">
          <div className="information-card no-background">
            <PieChart label="Pie" chartData={doughnutChartData} />
          </div>
          <div className="information-card">
            <div className="information-card-head">
              <div className="label">Existencias</div>
              <div className="sub-label">Total Productos</div>
              <PiPackageDuotone />
            </div>
            <div className="information-content">150</div>
          </div>
          <div className="information-card">
            <div className="information-card-head">
              <div className="label">Usuarios</div>
              {/* <div className="sub-label">Total Productos</div> */}
              <PiUserCheckDuotone />
            </div>
            <div className="information-content">150</div>
          </div>
          <div className="information-card">
            <div className="information-card-head">
              <div className="label">Clientes</div>
              <div className="sub-label">Registrados</div>
              <PiUsersDuotone />
            </div>
            <div className="information-content">150</div>
          </div>
        </div>
      </div>
    </div>
  )
}
