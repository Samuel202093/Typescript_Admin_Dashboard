// import React from 'react'
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table"
import { Products } from "../datas/data"
import { useState } from "react"
import { RxDotFilled } from "react-icons/rx";
import { IconType } from "react-icons";


type ProductType = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    img: string,
    description: string
    Icon: IconType
}

type Person = {
    id: number
    name: string
    email: string
    phone: string
  }

//   const columnHelper = createColumnHelper<Person>()
const columnHelper = createColumnHelper<ProductType>()


  const columns = [
    // columnHelper.accessor('id', {
    //   cell: info => info.getValue(),
    // }),
    // columnHelper.accessor('id', {
    //     cell: info => info.getValue(),
    //   }),

      columnHelper.accessor('Icon', {
        cell: () => <> <RxDotFilled /></>,
      }),
      // yo

    //   columnHelper.accessor('Icon',{
    //     cell: info => info.getValue()
    //   }),

    columnHelper.accessor(row => row.img, {
        id: 'img',
        cell: info => <img src={info.getValue()} className="h-[50px] w-[50px] rounded-lg"/>,
      }),
   
    columnHelper.accessor('name', {
      cell: info => <span className="font-bold">{info.getValue()}</span>,
    }),
    // you can use different aproach here
    // columnHelper.accessor(row => row.email, {
    //   id: 'email',
    //   cell: info => info.getValue(),
    //   header: () => <span>Email</span>,
    // }),
    columnHelper.accessor('quantity', {
        cell: info => info.getValue(),
      }),
    columnHelper.accessor('price', {
      header: () => 'Price',
      cell: info => <span className="font-bold">${info.renderValue()}</span>,
    }),
    columnHelper.accessor('description', {
        header: () => 'Description',
        cell: info => info.renderValue(),
      })
  ]

const Table = () => {
    const [data] = useState(() => [...Products])

    // const columns = [
    //     columnHelper.accessor('id',{
    //         cell: info => info.getValue()
    //     }),
    //     columnHelper.accessor('name', {
    //         cell: info => info.getValue()
    //     }),
    //     columnHelper.accessor(row => row.price, {
    //         id: 'price',
    //         cell: info => <span>{info.getValue()}</span>,
    //         header: () => <span>Price</span>
    //     }),
    //     columnHelper.accessor('quantity', {
    //         header: () => 'Quantity',
    //         cell: info => info.renderValue()
    //     }),
    //     columnHelper.accessor('img',{
    //         header: () => 'Image',
    //         cell: info => info.getValue()
    //     }),
    //     columnHelper.accessor('description',{
    //         header: () => 'Description',
    //         cell: info => info.getValue()
    //     })
    // ]

    

    const table = useReactTable({
        data, columns, getCoreRowModel:getCoreRowModel()
    })
    // const [data] = useState(()=>[...Products])
    // const columnHelper = createColumnHelper()

    

    // const table = useReactTable({
    //     data, columns, getCoreRowModel:getCoreRowModel()
    // })
  return (
    <div className="flex justify-center p-2 mx-auto text-whitey border-2 border-red-800">
        <table className="my-auto border text-sm">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase">
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left">
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
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
