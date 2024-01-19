import IAccount from './Account.interface'
import ICompany from './Company.interface'
import IProfile from './Profile.interface'

export type TTableKeys = 'Accounts' | 'Profiles' | 'Campaigns'

export type TDatas = IAccount[] | IProfile[] | ICompany[]

export type TData = IAccount | IProfile | ICompany
