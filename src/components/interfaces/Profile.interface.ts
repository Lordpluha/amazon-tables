import ICompany from './Company.interface'
import ICountry from './extras/Country.interface'
import IMarketplace from './extras/Marketplace.interface'

interface IProfile {
	readonly profileId: string
	readonly country: ICountry
	readonly marketplace: IMarketplace
	readonly campaignIds: ICompany['campaignId'][]
}

export default IProfile
