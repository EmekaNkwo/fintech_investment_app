"use client";

import * as React from "react";

import {
  IconCircleCheckFilled,
  IconDotsVertical,
  IconLoader,
  IconDownload,
} from "@tabler/icons-react";
import {
  ColumnDef,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ITransaction } from "@/shared/models";
import { CustomDataTable } from "@/shared/UIs";
import { Label } from "../ui/label";
import useDashboard from "./useDasboard";

const columns: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return row.original.description;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.type}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === "Done" ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="w-full text-right">Amount</div>,
  },

  {
    accessorKey: "beneficiary",
    header: "Beneficiary",
  },
  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Repeat</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const DataTable = React.memo(() => {
  const {
    transData,
    setType,
    type,
    sorting,
    setSorting,
    pagination,
    setPagination,
  } = useDashboard();

  const data = React.useMemo(
    () => transData?.data?.data || [],
    [transData?.data]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
    },
    getRowId: (row) => row.id.toString(),

    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  if (transData.isError) {
    return (
      <div className="m-6 border gap-3 flex items-center justify-center">
        <Label>Error loading data</Label>
        <Button onClick={transData.refetch}>Refetch</Button>
      </div>
    );
  }
  return (
    <div className="w-full flex-col justify-start gap-6">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Select value={type} onValueChange={(value) => setType(value)}>
          <SelectTrigger className="flex w-fit " size="sm" id="view-selector">
            <SelectValue placeholder="Select a view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Transactions</SelectItem>
            <SelectItem value="savings">Savings</SelectItem>
            <SelectItem value="spending">Spending</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <IconDownload />
            <span className="hidden lg:inline">Download</span>
          </Button>
        </div>
      </div>

      <CustomDataTable
        table={table}
        columns={columns}
        isLoading={transData?.isFetching}
      />
    </div>
  );
});
