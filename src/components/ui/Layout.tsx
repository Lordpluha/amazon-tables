import { Outlet, useLocation } from 'react-router-dom'

import AppProvider from './AppProvider'

const Layout = () => {
	const location = useLocation()
	return (
		<AppProvider>
			<h1>Tables: {location.pathname}</h1>
			<Outlet />
		</AppProvider>
	)
}

export default Layout
