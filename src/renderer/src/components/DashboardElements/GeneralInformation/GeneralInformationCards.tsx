import { IconType } from 'react-icons'
export interface IGeneralInformationCardData {
  label: string
  sublabel: string
  icon: IconType
}
interface Props {
  data: IGeneralInformationCardData
}
export const GeneralInformationCards = ({ data }: Props): JSX.Element => {
  return (
    <div className="general-card">
      <div className="general-card-data">
        <p className="label">{data.label}</p>
        <p className="sub-label">{data.sublabel}</p>
      </div>
      <data.icon />
    </div>
  )
}
