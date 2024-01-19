import { TData } from '@/components/interfaces/TableData.interfaces'
import { Column, Table } from '@tanstack/react-table'

import styles from './Filter.module.scss'

export default function Filter({
	column,
	table
}: {
	column: Column<TData, any>
	table: Table<TData>
}) {
	const firstValue = table
		.getPreFilteredRowModel()
		.flatRows[0]?.getValue(column.id)

	const columnFilterValue = column.getFilterValue()

	return typeof firstValue === 'number' ? (
		<div>
			<input
				type='number'
				value={(columnFilterValue as [number, number])?.[0] ?? ''}
				onChange={e =>
					column.setFilterValue((old: [number, number]) => [
						e.target.value,
						old?.[1]
					])
				}
				placeholder={`Min`}
				className={styles.filter}
			/>
			<input
				type='number'
				value={(columnFilterValue as [number, number])?.[1] ?? ''}
				onChange={e =>
					column.setFilterValue((old: [number, number]) => [
						old?.[0],
						e.target.value
					])
				}
				placeholder={`Max`}
				className={styles.filter}
			/>
		</div>
	) : (
		<input
			type='text'
			value={(columnFilterValue ?? '') as string}
			onChange={e => column.setFilterValue(e.target.value)}
			placeholder={`Search...`}
			className={styles.filter}
		/>
	)
}
