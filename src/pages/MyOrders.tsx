import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
import { myOrders } from "../datas/data";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { OrderType } from "../Types/interface";

const columnHelper = createColumnHelper<OrderType>();

const columns = [
  columnHelper.accessor("Icon", {
    header: () => "icon",
    cell: () => (
      <>
        {" "}
        <RxDotFilled className="text-xl" />
      </>
    ),
  }),

  columnHelper.accessor("name", {
    header: () => "product-name",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("email", {
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  }),
  columnHelper.accessor("date", {
    header: () => "date",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("time", {
    header: () => "time",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("amount", {
    header: () => "amount",
    cell: (info) => <span>${info.renderValue()}</span>,
  }),
  columnHelper.accessor("transcationId", {
    header: () => "transcationId",
    cell: (info) => <span className="font-bold">{info.renderValue()}</span>,
  }),
];

const MyOrders = () => {
  const [data] = useState(() => [...myOrders]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex self-center mt-5 min-h-[40vh] w-[100%] bg-[#e9eae7]y border-2y border-blacky rounded-lgy lg:overflow-x-hidden overflow-x-scroll">
      {/* <MdOutlineClose className='absolute right-[20%] text-2xl cursor-pointer'/> */}

      <div className="tableWrapper flex w-[100%] mt-5 flex-col overflow-x-scroll md:overflow-x-hidden gap-6 border-2y border-red-700y md:p-5 p-1">

        <table className="my-auto bordery text-sm">
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
                  <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
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

export default MyOrders;
