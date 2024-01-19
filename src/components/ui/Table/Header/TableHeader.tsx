import { TData } from '@/components/interfaces/TableData.interfaces'
import { Table } from '@tanstack/react-table'

import TableHeaderRow from './TableHeaderRow'

const TableHeader = ({ table }: { table: Table<TData> }) => {
	return (
		<thead>
			{table.getHeaderGroups().map(headerGroup => (
				<TableHeaderRow
					headerGroup={headerGroup}
					key={headerGroup.id}
					table={table}
				/>
			))}
		</thead>
	)
}

export default TableHeader
