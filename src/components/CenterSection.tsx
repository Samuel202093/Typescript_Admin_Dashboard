import BalanceWrapper from './BalanceWrapper'
import ChartWrapper from './ChartWrapper'
import TopSells from './TopSells'

const CenterSection = () => {
  return (
    <section className='flex flex-col gap-3 border-2y border-yellow-500y md:w-[70%] w-[100%] min-h-[20vh]y'>
        <BalanceWrapper/>
        <ChartWrapper/>
        <TopSells/>
    </section>
  )
}

export default CenterSection
