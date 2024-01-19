import CampaignIDPage from '@/pages/CampaignID'
import Accounts from '@/pages/tables/Accounts'
import Campaigns from '@/pages/tables/Campaigns'
import Profiles from '@/pages/tables/Profiles'

import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from '@pages/ErrorPage'

import Layout from '@ui/Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Accounts />
			},
			{
				path: '/Profiles/:accountId',
				element: <Profiles />
			},
			{
				path: '/Campaigns/:profileId',
				element: <Campaigns />
			},
			{
				path: '/Campaign/:campaignId',
				element: <CampaignIDPage />
			}
		]
	}
])
