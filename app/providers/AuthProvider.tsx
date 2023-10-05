import * as SplashScreen from 'expo-splash-screen'
import React, { FC, SetStateAction, createContext } from 'react'

import { IUser, TUser } from '@/types/types'

interface IContext {
	user: TUser
	setUser: React.Dispatch<SetStateAction<TUser>>
}

export const AuthContext = createContext({} as IContext)

SplashScreen.preventAutoHideAsync()

export const AuthProvider: FC<React.PropsWithChildren> = ({ children }) => {
	const [user, setUser] = React.useState<TUser>(null)

	React.useEffect(() => {
		let isMounted = true

		const getUserFromStorage = async () => {
			if (isMounted) {
				await SplashScreen.hideAsync()
			}
		}

		getUserFromStorage()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
