import axios from 'axios'

import IAccount from '@interfaces/Account.interface'
import ICompany from '@interfaces/Company.interface'
import IProfile from '@interfaces/Profile.interface'

class TableAPI {
	static serverUrl = 'http://localhost:2828'

	static async getAccounts(): Promise<IAccount[]> {
		const response = await axios
			.get<IAccount[]>(`${TableAPI.serverUrl}/Accounts`)
			.then(resp => resp.data)
		return response
	}

	static async getProfilesArrByAccId(
		accountId: string
	): Promise<IAccount['profileIds']> {
		const response = await axios
			.get<IAccount[]>(`${TableAPI.serverUrl}/Accounts`, {
				params: {
					accountId: accountId
				}
			})
			.then(resp => resp.data)
			.then(data => data[0].profileIds)
		return response
	}

	static async getProfilesByIds(profileIds: string[]) {
		const response = await axios
			.get<IProfile[]>(`${TableAPI.serverUrl}/Profiles`)
			.then(resp => resp.data)
			.then(data => data.filter(el => profileIds.includes(el.profileId)))
		return response
	}

	static async getCompaniesByProfId(
		profileId: string
	): Promise<IProfile['campaignIds']> {
		const response = await axios
			.get<IProfile[]>(`${TableAPI.serverUrl}/Profiles`, {
				params: {
					profileId: profileId
				}
			})
			.then(resp => resp.data)
			.then(data => data[0].campaignIds)
		return response
	}

	static async getCompaniesByIds(campaignIds: string[]): Promise<ICompany[]> {
		const response = await axios
			.get<ICompany[]>(`${TableAPI.serverUrl}/Campaigns`)
			.then(resp => resp.data)
			.then(data =>
				data.filter(el => campaignIds.includes(el.campaignId))
			)
		return response
	}
}

export default TableAPI
