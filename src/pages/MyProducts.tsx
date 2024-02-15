import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { Products } from "../datas/data";
import { ProductType } from "../Types/interface";

const columnHelper = createColumnHelper<ProductType>();

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
  columnHelper.accessor((row) => row.img, {
    id: "image",
    cell: (info) => (
      <img src={info.getValue()} className="h-[50px] w-[50px] rounded-lg" />
    ),
  }),

  columnHelper.accessor("name", {
    header: () => "product-name",
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  }),
  columnHelper.accessor("quantity", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: () => "price",
    cell: (info) => <span className="font-bold">${info.renderValue()}</span>,
  }),
  columnHelper.accessor("description", {
    header: () => "description",
    cell: (info) => info.renderValue(),
  }),
];

const MyProducts = () => {
  const [data] = useState(() => [...Products]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex self-center min-h-[100vh] mt-5 w-[100%] md:p-5 p-2 border-2y border-blacky md:overflow-x-hidden overflow-x-scroll">
      {/* <MdOutlineClose className='absolute right-[26%] text-2xl cursor-pointer'/> */}

      <div className="tableWrapper flex flex-col gap-6 w-[100%] overflow-x-scroll md:overflow-x-hidden md:p-5 p-1 mt-5">
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

export default MyProducts;
