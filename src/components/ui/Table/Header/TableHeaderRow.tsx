import { TData } from '@/components/interfaces/TableData.interfaces'
import { HeaderGroup, Table, flexRender } from '@tanstack/react-table'

import Filter from '../Filter/Filter'

const TableHeaderRow = ({
	headerGroup,
	table
}: {
	headerGroup: HeaderGroup<TData>
	table: Table<TData>
}) => {
	return (
		<tr key={headerGroup.id}>
			{headerGroup.headers.map(header => {
				return (
					<th key={header.id} colSpan={header.colSpan}>
						{header.isPlaceholder ? null : (
							<div
								{...{
									className: header.column.getCanSort()
										? 'cursor-pointer select-none'
										: '',
									onClick:
										header.column.getToggleSortingHandler()
								}}
							>
								{{
									asc: '🔼',
									desc: '🔽'
								}[header.column.getIsSorted() as string] ??
									null}
								{flexRender(
									header.column.columnDef.header,
									header.getContext()
								)}
							</div>
						)}
						{header.column.getCanFilter() && (
							<div>
								<Filter column={header.column} table={table} />
							</div>
						)}
					</th>
				)
			})}
		</tr>
	)
}

export default TableHeaderRow
