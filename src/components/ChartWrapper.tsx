import Chart from './Chart'
import Reports from './Reports'
import { useAppContext } from '../context/Product'

const ChartWrapper = () => {
  const { isOpenReport, toggleOpenReport } = useAppContext()
  return (
    <section className='flex flex-col gap-2 w-[100%] min-h-[40vh] border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>

        {/* general sale activity wrapper */}
      <div className='flex justify-between p-5 w-[100%] h-[10vh] border-2y border-red-600y border-b-[1px]'>
            <div>
                <span className='text-sm font-bold'>General Sale Activity</span>
            </div>
            <div className='flex flex-row gap-4'>
                <span className='text-sm mt-1 lg:mt-0'>All time</span>
                <span className='text-sm font-bold underline mt-1 lg:mt-0'>1 month</span>
                <span className='text-sm mt-1 lg:mt-0'>14 days</span>
            </div>
      </div>

      {/* chart container */}
      <div className='flex flex-col gap-2'>
        {/* sale generated */}
        <div className='flex justify-between p-5'>
            <div className='flex flex-col gap-1'>
                <span className='text-sm text-[rgba(0,0,0,0.3)]'>Sales Generated</span>
                <span className='text-xl font-bold'>$657,098.00USD</span>
            </div>
            <div>
                <span className='text-sm bg-[#e9eae7]y border-[1px] border-[rgba(0,0,0,0.3)] font-bold cursor-pointer rounded-2xl px-3 py-1' onClick={toggleOpenReport}>View report</span>
            </div>
        </div>

        <Chart/>
      </div>
      {isOpenReport && <Reports/>}
    </section>
  )
}

export default ChartWrapper
