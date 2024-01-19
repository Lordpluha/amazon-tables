import { TData } from '@/components/interfaces/TableData.interfaces'
import { Table } from '@tanstack/react-table'

import styles from './Paggination.module.scss'

const Paggination = ({ table }: { table: Table<TData> }) => {
	return (
		<div className={styles.paggination}>
			<button
				className={styles.paggination__btn}
				onClick={() => table.setPageIndex(0)}
				disabled={!table.getCanPreviousPage()}
			>
				{'<<'}
			</button>
			<button
				className={styles.paggination__btn}
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				{'<'}
			</button>
			<button
				className={styles.paggination__btn}
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				{'>'}
			</button>
			<button
				className={styles.paggination__btn}
				onClick={() => table.setPageIndex(table.getPageCount() - 1)}
				disabled={!table.getCanNextPage()}
			>
				{'>>'}
			</button>
			<span>
				<p>Page</p>
				<strong>
					{table.getState().pagination.pageIndex + 1} of{' '}
					{table.getPageCount()}
				</strong>
			</span>
		</div>
	)
}

export default Paggination
