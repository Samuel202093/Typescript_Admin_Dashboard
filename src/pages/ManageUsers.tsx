import { ImUser } from "react-icons/im";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { users } from '../datas/data';

const ManageUsers = () => {
  return (
    <div className='flex self-center min-h-[30vh] w-[100%] mt-5 bg-[#e9eae7]y rounded-lgy overflow-y-scrolly'>
      {/* <MdOutlineClose className='absolute right-[26%] text-2xl cursor-pointer'/> */}

      <div className='flex w-[100%] mt-3 flex-col gap-6 border-2y border-red-700y md:p-5 p-2 overflow-x-scrolly md:overflow-x-hiddeny'>
            <div className='userParent flexy justify-betweeny w-[100%] text-[rgba(0,0,0,0.3)] overflow-x-scroll md:overflow-x-hidden'>
                <span>icon</span>
                <span className='py-1 text-sm'>username</span>
                <span className='text-sm font-semibold py-1'>Email</span>
                <span className='px-3 py-1 rounded-3xl cursor-pointer text-sm'>suspend</span>
                <span className='px-3 py-1 cursor-pointer rounded-2xl text-sm'>unsuspend</span>
            </div>
          {users.map((x)=>{
            const {id, username, email} = x
            return(<div className='userParent flex justify-between w-[100%] text-[rgba(0,0,0,1)]' key={id}>
                  <span><ImUser className='text-xl'/></span>
                <span className='text-sm font-semibold'>{username}</span>
                <span className='text-sm font-semibold'>{email}</span>
                <span className='px-3 py-1 cursor-pointer '><RiUserUnfollowFill className='text-xl'/></span>
                <span className='px-3 py-1 cursor-pointer'><RiUserFollowFill className='text-xl'/></span>     
            </div>)
          })}
      </div>
      </div>
  )
}

export default ManageUsers
