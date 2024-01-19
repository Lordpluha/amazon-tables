import { TData } from '@/components/interfaces/TableData.interfaces'
import { Table, flexRender } from '@tanstack/react-table'

import { useNavigate } from 'react-router-dom'

const TableBody = ({
	table,
	linkTo,
	indexCol
}: {
	table: Table<TData>
	linkTo: string
	indexCol: string
}) => {
	const navigate = useNavigate()
	return (
		<tbody>
			{table
				.getRowModel()
				.rows.slice(0, 10)
				.map(row => (
					<tr
						key={row.id}
						onClick={() =>
							navigate(
								`${linkTo}/${Number(row.getUniqueValues(indexCol))}`
							)
						}
					>
						{row.getVisibleCells().map(cell => (
							<td key={cell.id}>
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext()
								)}
							</td>
						))}
					</tr>
				))}
		</tbody>
	)
}

export default TableBody
