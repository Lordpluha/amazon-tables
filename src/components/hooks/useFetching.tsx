import { useState } from 'react'

export const useFetching = (
	callback: () => void
): [() => Promise<void>, boolean, string] => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	const fetching = async (...args: []) => {
		try {
			setIsLoading(true)
			await callback(...args)
		} catch (e) {
			if (e instanceof Error) setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}

	return [fetching, isLoading, error]
}
