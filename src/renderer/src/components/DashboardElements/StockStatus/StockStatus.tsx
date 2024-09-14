import { BarChart, ChartDataItem } from '@renderer/components/shared/Charts/BarChart/BarChart'
// import { PiWarningDiamondDuotone } from 'react-icons/pi'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import './StockStatus.scss'
import { IStatusCardData, StockStatusCard } from './StockStatusCard'
import { useEffect, useRef, useState } from 'react'
export const StockStatus = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const dataExample: ChartDataItem[] = [
    { label: '\nAir\n \nfilter\n', value: 15 },
    { label: 'Fuel\n filter', value: 7 },
    { label: 'Oil Engine filter', value: 12 },
    { label: 'Neumatic', value: 3 },
    { label: 'Tube', value: 2 },
    { label: 'Beering', value: 9 },
    { label: 'Engine Oil', value: 5 },
    { label: 'Cable Brake', value: 8 },
    { label: 'Cable Clutch', value: 8 },
    { label: 'Cable PTO', value: 8 },
    { label: 'Seal', value: 8 }
  ]
  const dataCardExample: IStatusCardData[] = [
    { code: 'P553411', name: 'Engine Oil filter', quantity: 4 },
    { code: 'P550588', name: 'Fuel filter', quantity: 8 },
    { code: 'P550008', name: 'Engine Oil filter', quantity: 7 },
    { code: 'P502224', name: 'Hidraulyc filter', quantity: 3 },
    { code: 'P556247', name: 'Fuel filter', quantity: 4 },
    { code: 'PPB5-212', name: 'Harrow beering', quantity: 10 }
  ]
  const scrollLeft = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
      })
    }
  }
  const scrollRight = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
      })
    }
  }
  // Verificar si se puede desplazar a la izquierda o derecha
  const checkForScrollPosition = (): void => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2)
    }
  }
  // Listener de scroll
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', checkForScrollPosition)
      checkForScrollPosition() // Chequeo inicial

      return (): void => container.removeEventListener('scroll', checkForScrollPosition)
    }
  }, [])
  useEffect(() => {
    const container = containerRef.current
    const handleScroll = (event: WheelEvent): void => {
      if (container) {
        event.preventDefault() // Evita el desplazamiento vertical por defecto
        container.scrollLeft += event.deltaY // Aplica el desplazamiento horizontal
      }
    }
    if (container) {
      container.addEventListener('wheel', handleScroll)
    }
    // Cleanup
    return (): void => {
      if (container) {
        container.removeEventListener('wheel', handleScroll)
      }
    }
  }, [])
  return (
    <div className="StockStatus">
      <h3>Resumen Estado de Almacen</h3>
      <div className="status-chart-container">
        <BarChart chartData={dataExample} label="Status" key={'BarChart'} />
      </div>
      <div className="scroll-status-card-container">
        {canScrollLeft && (
          <button className="scroll-button left" onClick={scrollLeft}>
            {/* &#9664; */}
            <IoIosArrowBack />
          </button>
        )}
        <div className="alerts-container" ref={containerRef}>
          {dataCardExample.map((statusItem, index) => (
            <StockStatusCard key={index} data={statusItem} />
          ))}
        </div>
        {canScrollRight && (
          <button className="scroll-button right" onClick={scrollRight}>
            {/* &#9654; */}
            <IoIosArrowForward />
          </button>
        )}
      </div>
      <div className="status-footer">
        <p>See more...</p>
      </div>
    </div>
  )
}
