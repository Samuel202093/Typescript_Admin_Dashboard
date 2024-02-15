import AmountWrapper from './AmountWrapper'
import TopProducts from './TopProducts'
import AmtRecievedWrapper from './AmtRecievedWrapper'

const RightBar = () => {
  return (
    <section className='hidden md:flex xmd:flex flex-col gap-2 border-2y border-red-400y lg:mr-5 xmd:mr-0 md:mr-0 mr-2 lg:w-[30%] md:w-[35%]y w-[50%]y border-2y border-red-700y'>
      <AmountWrapper/>
      <TopProducts/>
      <AmtRecievedWrapper/>
    </section>
  )
}

export default RightBar
