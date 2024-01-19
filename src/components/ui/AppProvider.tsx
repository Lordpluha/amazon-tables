import { PropsWithChildren, useState } from 'react'

import { dataContext } from '../context'
import { TDatas } from '../interfaces/TableData.interfaces'

const AppProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<TDatas>(null!)
	return (
		<dataContext.Provider value={[data, setData]}>
			{children}
		</dataContext.Provider>
	)
}

export default AppProvider
