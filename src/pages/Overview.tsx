import CenterSection from '../components/CenterSection'
import RightBar from '../components/RightBar'

const Overview = () => {
  return (
    <section className='md:p-5 p-1 flex justify-between gap-3'>
        <CenterSection/>
        <RightBar/>
    </section>
  )
}

export default Overview
