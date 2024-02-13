import { WiDegrees } from "react-icons/wi";
import { CiWavePulse1 } from "react-icons/ci";

const AmtRecievedWrapper = () => {
  return (
    <section className='flex flex-col p-5 border-[1px] border-[rgba(0,0,0,0.3)] rounded-lg'>
        {/* <h3>Amount Recieved</h3> */}
        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <span className='text-sm'>Today's Recieved</span>
                <span className='text base font-bold'>$24,800</span>
            </div>
            <WiDegrees className='text-7xl'/>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <span className='text-sm'>Recieved Forever</span>
                <span className='text base font-bold'>$1,82,800</span>
            </div>
            <CiWavePulse1 className='text-2xl'/>
        </div>
    </section>
  )
}

export default AmtRecievedWrapper
