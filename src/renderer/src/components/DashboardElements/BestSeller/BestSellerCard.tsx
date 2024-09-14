import { FaAward } from 'react-icons/fa6'
import './BestSellerCard.scss'
export interface IBestSellerData {
  name: string
  code: string
  quantity: number
}
export interface Props {
  data: IBestSellerData
}
export const BestSellerCard = ({ data }: Props): JSX.Element => {
  return (
    <div className="best-seller-card">
      <p className="name">{data.name}</p>
      <FaAward />
      <p className="codigo">{data.code}</p>
      <p className="quantity">{`${data.quantity} vendidos`}</p>
    </div>
  )
}
