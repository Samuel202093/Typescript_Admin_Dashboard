

const TabHeading = () => {
  return (
    <section className='flex justify-between p-5'>
        <div className='flex gap-4'>
            <span className='text-sm font-semibold'>Overview</span>
            <span className='text-sm'>Clients</span>
            <span className='text-sm'>Accounts</span>
            <span className='text-sm'>Payments</span>
        </div>
        <div>
            <span className='text-sm font-medium underline md:mr-8 mr-0'>Manage</span>
        </div>
    </section>
  )
}

export default TabHeading
