import TableAPI from '@/components/api/TableAPI'
import { dataContext } from '@/components/context'
import { useFetching } from '@/components/hooks/useFetching'
import { TData } from '@/components/interfaces/TableData.interfaces'
import Table from '@/components/ui/Table/Table'
import { ColumnDef } from '@tanstack/react-table'

import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Profiles = () => {
	const { accountId } = useParams()
	const [data, setData] = useContext(dataContext)
	const [fetchProfiles, isLoading, error] = useFetching(async () => {
		const arr = await TableAPI.getProfilesArrByAccId(accountId as string)
		const resp = await TableAPI.getProfilesByIds(arr)
		setData(resp)
	})
	useEffect(() => {
		fetchProfiles()
	}, [])

	const columnDef: ColumnDef<TData>[] = [
		{ accessorKey: 'profileId', header: 'profileId' },
		{ accessorKey: 'country', header: 'country' },
		{ accessorKey: 'marketplace', header: 'marketplace' },
		{ accessorKey: 'campaignIds', header: 'campaignIds' }
	]

	if (error) throw error
	if (isLoading) return <h1>Loading...</h1>
	if (data)
		return (
			<div>
				<Table
					data={data}
					columns={columnDef}
					linkTo={'../../Campaigns'}
					indexCol={'profileId'}
				/>
			</div>
		)
}

export default Profiles
