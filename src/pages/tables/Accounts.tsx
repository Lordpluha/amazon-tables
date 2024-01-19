import TableAPI from '@/components/api/TableAPI'
import { dataContext } from '@/components/context'
import { useFetching } from '@/components/hooks/useFetching'
import { TData } from '@/components/interfaces/TableData.interfaces'
import Table from '@/components/ui/Table/Table'
import { ColumnDef } from '@tanstack/react-table'

import { useContext, useEffect } from 'react'

const Accounts = () => {
	const [data, setData] = useContext(dataContext)
	const [fetchAccounts, isLoading, error] = useFetching(async () => {
		const resp = await TableAPI.getAccounts()
		setData(resp)
	})
	useEffect(() => {
		fetchAccounts()
	}, [])

	const columnDef: ColumnDef<TData>[] = [
		{ accessorKey: 'accountId', header: 'accountId' },
		{ accessorKey: 'email', header: 'email' },
		{ accessorKey: 'authToken', header: 'authToken' },
		{ accessorKey: 'creationDate', header: 'creationDate' },
		{ accessorKey: 'profileIds', header: 'profileIds' }
	]

	if (error) throw error
	if (isLoading) return <h1>Loading...</h1>
	if (data)
		return (
			<div>
				<Table data={data} columns={columnDef} linkTo={'Profiles'} indexCol={'accountId'} />
			</div>
		)
}

export default Accounts
