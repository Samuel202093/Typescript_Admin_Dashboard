import { ImUser } from "react-icons/im";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import { users } from "../datas/data";
import { useState } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { UserType } from "../Types/interface";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'

const ManageUsers = () => {
  const [data] = useState(() => [...users]);
  const [clickSuspend, setClickSuspend] = useState<number | null>(null)
  const [suspendColor, setSuspendColor] = useState<string>('black')

  const columnHelper = createColumnHelper<UserType>();
const columns = [
  columnHelper.accessor("Icon", {
    header: () => "icon",
    cell: () => (
      <>
        {" "}
        <ImUser className="text-xl" />
      </>
    ),
  }),

  columnHelper.accessor("username", {
    header: () => "username",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("email", {
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  }),
  columnHelper.accessor("Suspend", {
    header: () => "suspend",
    cell: ({row}:any) => (
      <>
        {" "}
        <RiUserUnfollowFill className="text-xl cursor-pointer text-red-800y" style={{color:clickSuspend === row.original.id ? suspendColor : ''}} onClick={()=> handleSuspend(row.original.id)}/>
      </>
    ),
  }),
  columnHelper.accessor("Unsuspend", {
    header: () => "unsuspend",
    cell: ({row}:any) => (
      <>
        {" "}
        <RiUserFollowFill className="text-xl cursor-pointer text-green-500" onClick={()=> handleUnSuspend(row.original.id)} />
      </>
    ),
  }),
];

const handleSuspend = (id:number)=>{
  users.find((x):any=>{
    if (x.id === id) {
      setClickSuspend(id)
      setSuspendColor('red')
      toast.success(`${x.username} has been suspended`,{
        transition: Slide,
        position: "top-right"
    })
    }
  })
}

const handleUnSuspend = (id:number)=>{
  users.find((x):any=>{
    if (x.id === id) {
      setClickSuspend(id)
      setSuspendColor('black')
      toast.success(`${x.username} has been unsuspended`,{
        transition: Slide,
        position: "top-right"
    })
    }
  })
}




  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex self-center min-h-[30vh] w-[100%] mt-5 bg-[#e9eae7]y rounded-lgy overflow-y-scrolly">
      {/* <MdOutlineClose className='absolute right-[26%] text-2xl cursor-pointer'/> */}

      <div className="tableWrapper flex w-[100%] mt-3 flex-col gap-6 border-2y border-red-700y md:p-5 xmd:p-5 p-2 overflow-x-scroll md:overflow-x-hidden xmd:overflow-x-hidden">
        <table className="my-auto bordery text-sm overflow-x-scrolly">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b text-[rgba(0,0,0,0.3)]"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 pr-2 py-4 font-medium text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 pt-[14px] pb-[18px] text-left"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
