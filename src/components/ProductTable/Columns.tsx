import { type Product } from '@prisma/client';
import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'collection',
    header: 'Collection',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('collection')}</div>
    ),
  },
  {
    accessorKey: 'model',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Model
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('model')}</div>,
  },
  {
    accessorKey: 'product_id',
    header: () => <div className="">ID</div>,
    cell: ({ row }) => {
      const productId: string = row.getValue('product_id');

      return <div className="font-medium">{productId}</div>;
    },
  },
  {
    accessorKey: 'color',
    header: () => <div className="">Color</div>,
    cell: ({ row }) => {
      const color: string = row.getValue('color');

      return <div className="font-medium">{color}</div>;
    },
  },
  {
    accessorKey: 'color_code',
    header: () => <div className="">Color Code</div>,
    cell: ({ row }) => {
      const colorCode: string = row.getValue('color_code');

      return <div className="font-medium">{colorCode}</div>;
    },
  },
  {
    accessorKey: 'size',
    header: () => <div className="">Size</div>,
    cell: ({ row }) => {
      const size: string = row.getValue('size');

      return <div className="font-medium">{size}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(JSON.stringify(product))
              }
            >
              Copy model code
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
