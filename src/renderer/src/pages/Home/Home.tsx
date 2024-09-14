import { LastMovements } from '@renderer/components/DashboardElements/LastMovements/LastMovements'
import './Home.scss'
import { StockStatus } from '@renderer/components/DashboardElements/StockStatus/StockStatus'
import { BestSeller } from '@renderer/components/DashboardElements/BestSeller/BestSeller'
import { QuickInformation } from '@renderer/components/DashboardElements/QuickInformation/QuickInformation'
import { GeneralInformation } from '@renderer/components/DashboardElements/GeneralInformation/GeneralInformation'
export const Home = () => {
  return (
    <div className="Home">
      <h1>stockFlow</h1>
      <div className="homeItemA">
        <LastMovements />
      </div>
      <div className="homeItemB">
        <StockStatus />
      </div>
      <div className="homeItemC">
        <BestSeller />
      </div>
      <div className="homeItemD">
        <QuickInformation />
      </div>
      <div className="homeItemE">
        <GeneralInformation />
      </div>
    </div>
  )
}
