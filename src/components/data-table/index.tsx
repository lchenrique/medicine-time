/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ReactNode } from "react";
import "./style.css";
import { cn } from "@/lib/utils";
import { Empty } from "../result/empty";
export interface DataColumn<D> {
  key: string;
  label: ReactNode
  fixed?: "left" | "right"
  className?: string
  render?: (data: D) => ReactNode
}

export type TableData<D> = D & { key: string }

export interface IDataTableProps<D> {
  columns: DataColumn<D>[]
  data: TableData<D>[] | null
  loading?: boolean
}

const DataTable = <T extends Record<any, any>>({ data, columns, loading }: IDataTableProps<T>) => {
  return (
    <div className="relative min-h-[200px]"  >
      {<div data-loading={loading} className={cn("absolute",  "transition-all data-[loading=false]:pointer-events-none data-[loading=true]:opacity-100 data-[loading=false]:opacity-0 w-full h-full opacity-100  z-[2] flex items-center justify-center bg-card/50 backdrop-blur-sm" )}>
        <div className="inset-1/2 loader" />
      </div>}
      <Table >
        <TableHeader>
          <TableRow className="group">
            {
              columns.map(column => {
                const isFixed = data?.length ? column.fixed === "right" ? "fixed-right bg-card  top-0 bottom-0" : "" : ""
                const props = { className: cn("whitespace-nowrap", isFixed, column.className) }

                return <TableHead key={column.key} {...props}>{column.label}</TableHead>
              })
            }

            {/* <TableHead className=" fixed-right z-[1] bg-background shadow-lg" ></TableHead> */}
          </TableRow>
        </TableHeader>

        <TableBody  >
          {data?.length  === 0 &&  <div className="w-full absolute flex items-center justify-center">
           <Empty/>
          </div>}
          {
            data?.map((p) => {

              return <TableRow data-key={p.key} key={p.key} className="group/table-row">
                {
                  columns.map(v => {
                    const isFixed = data?.length ? v.fixed === "right" ? "fixed-right bg-card top-0 bottom-0" : "" : ""
                    const props = { className: cn(isFixed, v.className) }

                    if (v.render) {

                      return <TableCell  data-key={v.key} key={v.key} {...props}> {v.render(p)} </TableCell>

                    }
                    return <TableCell  data-key={v.key}  key={v.key} {...props}> {p[v.key]} </TableCell>
                  })
                }

                {/* <TableCell className="p-1  fixed-right bg-background  top-0 bottom-0">
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size="icon" className="hover:bg-transparent">
                      <EllipsisVertical className="size-4" />
                    </Button></DropdownMenuTrigger>
                  <DropdownMenuContent >
                    <DropdownMenuArrow className="fill-border " />
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View patient</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell> */}
              </TableRow>
            })
          }

        </TableBody>
      </Table>
    </div>
  );
};

export { DataTable };