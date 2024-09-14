import './GeneralInformation.scss'
import { PiPrinterDuotone, PiYoutubeLogoDuotone, PiBuildingsDuotone } from 'react-icons/pi'
import { GeneralInformationCards, IGeneralInformationCardData } from './GeneralInformationCards'
const generalInformationData: IGeneralInformationCardData[] = [
  { label: 'Printers', sublabel: 'Epson TM¡ 300', icon: PiPrinterDuotone },
  { label: 'Store', sublabel: 'Almacen Matriz', icon: PiBuildingsDuotone },
  { label: 'Tutoriales', sublabel: 'youtube/dinoSource_tutorials', icon: PiYoutubeLogoDuotone }
]
export const GeneralInformation = (): JSX.Element => {
  return (
    <div className="GeneralInformation">
      <div className="scroll-general-cards">
        <div className="container-general-cards">
          {generalInformationData.map((data, index) => (
            <GeneralInformationCards key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}
