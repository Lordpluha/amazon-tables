import { Dispatch, SetStateAction, createContext } from 'react'

import { TDatas } from '../interfaces/TableData.interfaces'

export const dataContext = createContext<
	[TDatas, Dispatch<SetStateAction<TDatas>>]
>(null!)
