import { user } from '@renderer/assets'
import './SideBarMenuCardView.scss'
import { IUSerCard } from '@renderer/interfaces/commons/sideBar.interface'
import { classNames } from '@renderer/utils/commons/side_bar.utils'
import { useNavigate } from 'react-router-dom'

interface Props {
  isOpen: boolean
  card: IUSerCard
}
export const SideBarMenuCardView = ({ card, isOpen }: Props): JSX.Element => {
  const navigate = useNavigate()
  const handleNavigate = (ruta: string): void => {
    navigate(ruta)
  }
  return (
    <div className="SideBarMenuCardView">
      <img className="profile" src={user} alt={card.displayName} />
      <div className={classNames('profileInfo', isOpen ? '' : 'collapsed')}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <div className="url">
          <a onClick={() => handleNavigate(card.url)}>Ir al perfil</a>
        </div>
      </div>
    </div>
  )
}
