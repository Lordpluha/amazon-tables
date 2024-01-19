import TableAPI from '@/components/api/TableAPI'
import { dataContext } from '@/components/context'
import { useFetching } from '@/components/hooks/useFetching'
import { TData } from '@/components/interfaces/TableData.interfaces'
import Table from '@/components/ui/Table/Table'
import { ColumnDef } from '@tanstack/react-table'

import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Campaigns = () => {
	const { profileId } = useParams()

	const [data, setData] = useContext(dataContext)

	const [fetchCampaigns, isLoading, error] = useFetching(async () => {
		const arr = await TableAPI.getCompaniesByProfId(profileId as string)
		console.log(arr)
		const resp = await TableAPI.getCompaniesByIds(arr)
		setData(resp)
	})
	useEffect(() => {
		fetchCampaigns()
	}, [])

	const columnDef: ColumnDef<TData>[] = [
		{ accessorKey: 'campaignId', header: 'campaignId' },
		{ accessorKey: 'clicks', header: 'clicks' },
		{ accessorKey: 'cost', header: 'cost' },
		{ accessorKey: 'date', header: 'date' }
	]

	if (error) throw error
	if (isLoading) return <h1>Loading...</h1>
	if (data)
		return (
			<div>
				<Table
					data={data}
					columns={columnDef}
					linkTo={'../../Campaign'} indexCol={'campaignId'}				/>
			</div>
		)
}

export default Campaigns
