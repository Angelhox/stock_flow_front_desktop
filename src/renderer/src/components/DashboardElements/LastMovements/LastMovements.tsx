import './LastMovements.scss'
import { IMovementsCardData, MovementsCards } from './MovementsCards'
// import { PiNavigationArrowDuotone } from 'react-icons/pi'
const exampleData: IMovementsCardData[] = [
  {
    type: 'In',
    date: '2024-09-08',
    subject: 'Dimagro S.A'
  },
  {
    type: 'Out',
    date: '2024-09-07',
    subject: 'Sucursal Taller'
  },
  {
    type: 'In',
    date: '2024-09-05',
    subject: 'Cepsa S.A'
  },
  {
    type: 'Out',
    date: '2024-08-01',
    subject: 'Juan Alcaziga'
  },
  {
    type: 'Out',
    date: '2024-07-29',
    subject: 'Omar Villavicencio'
  },
  {
    type: 'Out',
    date: '2024-07-31',
    subject: 'Llanticentro S.A'
  },
  {
    type: 'Out',
    date: '2024-07-31',
    subject: 'Llanticentro S.A'
  },
  {
    type: 'Out',
    date: '2024-07-31',
    subject: 'Llanticentro S.A'
  },
  {
    type: 'Out',
    date: '2024-07-31',
    subject: 'Llanticentro S.A'
  },
  {
    type: 'Out',
    date: '2024-07-31',
    subject: 'Llanticentro S.A'
  }
]
export const LastMovements = (): JSX.Element => {
  return (
    <div className="LastMovements">
      <h3>Movimientos recientes</h3>
      <div className="scroll-movements-cards">
        <div className="container-movements-card">
          {exampleData.map((data, index) => (
            <MovementsCards key={index} data={data} />
          ))}
        </div>
      </div>
      <div className="movements-footer">
        <p>See more...</p>
      </div>
    </div>
  )
}
