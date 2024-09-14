import { PiArrowFatLeftDuotone, PiArrowFatRightDuotone } from 'react-icons/pi'
import './MovementsCards.scss'
export interface IMovementsCardData {
  type: string
  date: string
  subject: string
}
interface Props {
  data: IMovementsCardData
}
export const MovementsCards = ({ data }: Props): JSX.Element => {
  return (
    <div className="movement-card">
      {data.type === 'In' ? (
        <PiArrowFatRightDuotone className="in" />
      ) : (
        <PiArrowFatLeftDuotone className="out" />
      )}
      {/* <PiNavigationArrowDuotone /> */}
      <p className="movement-date">{data.date}</p>
      <p className="movement-subject">{data.subject}</p>
    </div>
  )
}
