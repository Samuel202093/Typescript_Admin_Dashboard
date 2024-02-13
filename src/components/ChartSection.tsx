import RightBar from './RightBar'
import CenterSection from './CenterSection'

const ChartSection = () => {
  return (
    <section className='p-5 lg:p-5 md:p-2 flex justify-between gap-3 lg:gap-3 md:gap-1 border-2y border-green-800y'>
        <CenterSection/>
        <RightBar/>
    </section>
  )
}

export default ChartSection
