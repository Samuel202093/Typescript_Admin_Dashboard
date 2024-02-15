import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { payment } from "../datas/data";
import { PaymentType } from "../Types/interface";

const columnHelper = createColumnHelper<PaymentType>();

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

  columnHelper.accessor("product_name", {
    header: () => "product-name",
    cell: (info) => <span className="font-semibold">{info.getValue()}</span>,
  }),
  columnHelper.accessor("email", {
    header: () => "email",
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  }),
  columnHelper.accessor("amount", {
    header: () => "price",
    cell: (info) => (
      <span className="font-semibold">${info.renderValue()}</span>
    ),
  }),
  columnHelper.accessor("transcationId", {
    header: () => "transcationId",
    cell: (info) => <span className="font-bold">{info.renderValue()}</span>,
  }),
];

const Payments = () => {
  const [data] = useState(() => [...payment]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex self-center min-h-[20vh] w-[100%] mt-5 bg-[#e9eae7]y rounded-lg border-2y border-red-700y overflow-x-scroll md:overflow-x-hidden">
      {/* <MdOutlineClose className='absolute right-[25%] text-2xl cursor-pointer'/> */}

      <div className="tableWrapper flex w-[100%] mt-5 flex-col overflow-x-scroll md:overflow-x-hidden gap-5 border-2y border-red-700y md:p-8 p-1">
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
                  <td key={cell.id} className="px-1 md:px-4 pt-[14px] pb-[18px]">
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

export default Payments;
