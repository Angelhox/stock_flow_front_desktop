import { SideBarMenu } from '@renderer/components/LoggedLayoutElements/SideBar/SideBarMenu/SideBarMenu'
import './LoggedLayout.scss'
import './LoggedLayoutGrid.scss'
import { IMenuItem, IUSerCard } from '@renderer/interfaces/commons/sideBar.interface'
// import {
//   FcCustomerSupport,
//   FcHome,
//   FcConferenceCall,
//   FcPackage,
//   FcSurvey,
//   FcShipped,
//   FcBusinessman
// } from 'react-icons/fc'
import { IoHomeOutline } from 'react-icons/io5'
import { PiPackage } from 'react-icons/pi'
import { GiHandTruck } from 'react-icons/gi'
interface Props {
  children: JSX.Element
}
import { LiaClipboardSolid } from 'react-icons/lia'
// import { GrDocumentPerformance, GrUserAdmin } from 'react-icons/gr'
import { IoPeopleOutline } from 'react-icons/io5'
// import { RiAdminLine } from "react-icons/ri";
// import { FiUserCheck } from "react-icons/fi";
// import { TbUserHeart } from "react-icons/tb";
import { PiUserCheck } from 'react-icons/pi'
const items: IMenuItem[] = [
  { id: 'home', label: 'Home', icon: IoHomeOutline, url: '/home' },
  { id: 'prducts', label: 'Products', icon: PiPackage, url: '/products' },
  { id: 'movements', label: 'Movements', icon: GiHandTruck, url: '/movements' },
  { id: 'reports', label: 'Reports', icon: LiaClipboardSolid, url: '/reports' },
  { id: 'customers', label: 'Customers', icon: IoPeopleOutline, url: '/customers' },

  { id: 'users', label: 'Users', icon: PiUserCheck, url: '/users' }
]
const userCard: IUSerCard = {
  id: 'user-card',
  title: 'Developer',
  displayName: 'Angel Cusin',
  photoUrl: 'https://robohash.org/user3',
  url: '/'
}
export const LoggedLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="LoggedLayout">
      <div className="content">
        <SideBarMenu items={items} card={userCard} />
        <div className="top-bar">stockFlow</div>
        <div className="shadow-top-bar"></div>
        <div className="children-content">{children}</div>
      </div>
    </div>
  )
}
