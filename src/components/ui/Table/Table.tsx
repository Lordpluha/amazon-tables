import { TData, TDatas } from '@/components/interfaces/TableData.interfaces'
import {
	ColumnDef,
	SortingState,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable
} from '@tanstack/react-table'

import { useState } from 'react'

import TableBody from './Body/TableBody'
import TableHeader from './Header/TableHeader'
import Paggination from './Paggination/Paggination'

const ProfilesTable = ({
	data,
	columns,
	linkTo = '',
	indexCol
}: {
	data: TDatas
	columns: ColumnDef<TData>[]
	linkTo: string
	indexCol: string
}) => {
	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data: data,
		columns: columns,

		state: {
			sorting
		},
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),

		getCoreRowModel: getCoreRowModel(),

		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		debugTable: true
	})

	return (
		<div>
			<table>
				<TableHeader table={table} />
				<TableBody table={table} linkTo={linkTo} indexCol={indexCol} />
			</table>
			<Paggination table={table} />
		</div>
	)
}

export default ProfilesTable
