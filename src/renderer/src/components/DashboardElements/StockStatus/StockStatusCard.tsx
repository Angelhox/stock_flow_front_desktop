import './StockStatusCard.scss'
import { PiWarningDuotone } from 'react-icons/pi'
export interface IStatusCardData {
  name: string
  code: string
  quantity: number
}
export interface Props {
  data: IStatusCardData
}
export const StockStatusCard = ({ data }: Props): JSX.Element => {
  return (
    <div className="alert-status-card">
      {/* <PiWarningDiamondDuotone /> */}
      {data.quantity > 5 ? (
        <PiWarningDuotone className="less" />
      ) : (
        <PiWarningDuotone className="least" />
      )}
      <div className="alert-data">
        <p className="alert-name">{data.name}</p>
        <p className="alert-code">{data.code}</p>
      </div>
      <p
        className={data.quantity > 5 ? 'quantity less' : 'quantity least'}
      >{`${data.quantity} restantes`}</p>
    </div>
  )
}
