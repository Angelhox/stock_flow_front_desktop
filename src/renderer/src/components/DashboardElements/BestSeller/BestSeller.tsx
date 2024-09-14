import './BestSeller.scss'
import { LiaAwardSolid } from 'react-icons/lia'
import { TbAwardFilled } from 'react-icons/tb'
import { AiTwotoneStar } from 'react-icons/ai'
import { TbJewishStarFilled } from 'react-icons/tb'
import { FaAward } from 'react-icons/fa6'
import { BestSellerCard, IBestSellerData } from './BestSellerCard'
const dataBestSellerExample: IBestSellerData[] = [
  { name: 'Filtro de combustible', code: 'P550588', quantity: 10 },
  { name: 'Filtro de motor', code: 'P553411', quantity: 7 },
  { name: 'Filtro hidraulico', code: 'PSH 517', quantity: 4 },
  { name: 'Candados gruesos', code: '0001', quantity: 15 },
  { name: 'Bomba auxiliar de combustible', code: '87564321', quantity: 3 },
  { name: 'Filtro de combustible', code: 'P550588', quantity: 10 }
]
export const BestSeller = (): JSX.Element => {
  return (
    <div className="BestSeller">
      <h3>Mas vendidos</h3>
      <div className="scroll-card-container">
        <div className="cards-container">
          {dataBestSellerExample.map((data, index) => (
            <BestSellerCard key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="best-seller-footer">
        <p>See more..</p>
      </div>
    </div>
  )
}
