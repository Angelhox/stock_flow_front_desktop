import './SideBarMenu.scss'
import { IMenuItem, IUSerCard } from '@renderer/interfaces/commons/sideBar.interface'
import { classNames } from '@renderer/utils/commons/side_bar.utils'
import { useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { SideBarMenuCardView } from '../SideBarMenuCardView/SideBarMenuCardView'
import { SideBarMenuItemView } from '../SideBarMenuItemView/SideBarMenuItemView'
interface Props {
  items: IMenuItem[]
  card: IUSerCard
}
export const SideBarMenu = ({ items, card }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function handleClick(): void {
    setIsOpen(!isOpen)
  }
  return (
    <div className={classNames('SideBarMenu left-menu', isOpen ? 'expanded' : 'collapsed')}>
      <div className="menuButton">
        <button className="hamburgerIcon" onClick={handleClick}>
          <VscMenu />
        </button>
      </div>
      <div className="card-view-container">
        <SideBarMenuCardView card={card} isOpen={isOpen} />
      </div>
      <div className="menu-items-cell">
        <div className="menu-items-container">
          {' '}
          {items.map((item) => (
            <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
          ))}
        </div>
      </div>
    </div>
  )
}
