import './SideBarMenuItemView.scss'
import { IMenuItem } from '@renderer/interfaces/commons/sideBar.interface'
import { classNames } from '@renderer/utils/commons/side_bar.utils'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  item: IMenuItem
  isOpen: boolean
}
export const SideBarMenuItemView = ({ isOpen, item }: Props): JSX.Element => {
  const navigate = useNavigate()
  const handleNavigate = (route: string): void => {
    navigate(route)
  }
  const { pathname } = useLocation()
  const isCurrentPage = (route: string): boolean => {
    return route === pathname
  }
  return (
    <div className="SideBarMenuItemView">
      <a
        onClick={() => handleNavigate(item.url)}
        className={classNames(
          isCurrentPage(item.url) ? 'active' : '',
          classNames(isOpen ? 'expanded' : 'collapsed')
        )}
      >
        <div className={classNames('ItemContent', isOpen ? '' : 'collapsed')}>
          <div className="icon">
            <item.icon />
          </div>
          <span className="label">{item.label}</span>
        </div>
      </a>
      {!isOpen ? <div className="tooltip">{item.label}</div> : ''}
    </div>
  )
}
