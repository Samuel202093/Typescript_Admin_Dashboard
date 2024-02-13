import { Link } from 'react-router-dom';
import { accountLinks, adminLinks, productLinks } from '../datas/data';
import { MdOutlineClose } from "react-icons/md";
import { useAppContext } from '../context/Product';
import { motion } from 'framer-motion'

const MobileNav = () => {
    const { toggleMobileOpen } = useAppContext()
    const fadeInAnimationVariants = {
        initial:{
            opacity: 0,
            x: -100,
        },
        animate: ()=>({
            opacity: 1,
            x: 0,
            transition:{
                type: "keyframes",
                delay: 0.07,
                duration: 0.75
            }
        })
    }

  return (
    <motion.nav className='fixed top-0 z-10 left-0 flex flex-col gap-4 bg-[#e9eae7] md:w-[45%] w-[100%] p-6 h-[100vh]' variants={fadeInAnimationVariants} initial="initial" viewport={{once:true}} whileInView="animate">
        <MdOutlineClose className='absolute top-0 text-2xl right-0' onClick={toggleMobileOpen}/>
      <div className='mb-6'>
        <span className='text-xl font-semibold'>Samuel.io</span>
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
    </motion.nav>
  )
}

export default MobileNav
