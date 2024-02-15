import { Link } from 'react-router-dom';
import { accountLinks, adminLinks, productLinks } from '../datas/data';

const NavBar = () => {


  return (
    <nav className='hidden lg:flex flex-col gap-4 bg-[#e9eae7] w-[20%] p-6'>
      <div className='mb-6'>
        <span className='text-xl font-semibold'>Dashboard.io</span>
      </div>

      <div className='flex flex-col gap-5 border-b-[1px] border-[rgba(0,0,0,0.2)] pb-8'>
        {/* account section */}
        <span className="text-sm font-medium">ACCOUNT</span>

        {accountLinks.map((x)=>{
                const {id, name, path, Icon} = x
                return(<Link to={`${path}`} key={id} className="flex gap-4 cursor-pointer">
                    <Icon className="text-xl cursor-pointer"/>
                    <span className="text-sm">{name}</span>
                </Link>)
            })}
      </div>

        {/* product section */}
      <div className='flex flex-col gap-5 border-b-[1px] border-[rgba(0,0,0,0.2)] pb-8'>
        <span className="text-sm font-medium">PRODUCT</span>
            {productLinks.map((x)=>{
                const {id, name, path, Icon} = x
                return(<Link to={`${path}`} key={id} className='flex gap-4 cursor-pointer'>
                        <Icon className='text-xl cursor-pointer'/>
                        <span className='text-sm'>{name}</span>
                </Link>)
            })}
      </div>


        {/* Admin Section */}
      <div className='flex flex-col gap-5'>
        <span className="text-sm font-medium">ADMIN</span>
           
                {adminLinks.map((x)=>{
                    const {id, name, path, Icon} = x
                    return (<Link to={`${path}`} key={id} className='flex gap-4 cursor-pointer'>
                            <Icon className='text-xl cursor-pointer'/>
                            <span className='text-sm'>{name}</span>
                    </Link>)
                })}
      </div>
    </nav>
  )
}

export default NavBar
