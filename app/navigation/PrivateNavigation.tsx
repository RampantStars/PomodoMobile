import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { Auth } from '@/components/screens'

import { useAuth } from '@/hooks/useAuth'

import { COLOR } from '@/const/color'

import { TypeRootStackParamsList } from './navigation.types'
import { routes } from './routes'

export const PrivateNavigation: FC = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamsList>()

	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: COLOR.PRIMARY_DARK },
				animation: 'none'
			}}
		>
			{user ? (
				routes.map((route) => (
					<Stack.Screen key={route.name} {...route}></Stack.Screen>
				))
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}
