import IProfile from './Profile.interface'

interface IAccount {
	readonly accountId: string
	readonly email: string
	readonly authToken: string
	readonly creationDate: number
	readonly profileIds: IProfile['profileId'][]
}

export default IAccount
