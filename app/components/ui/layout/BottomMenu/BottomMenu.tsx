import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TNav } from '@/types/types'

import { MenuItem } from './components'
import { menuData } from './const'

interface IBottomMenu {
	nav: TNav
	currentRoute?: string
}

export const BottomMenu: FC<IBottomMenu> = ({ currentRoute, nav }) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='px-5 flex-row justify-between items-center w-full bg-primary-dark'
			style={{ paddingBottom: bottom + 20 }}
		>
			{menuData.map((item) => (
				<MenuItem
					key={item.iconName}
					item={item}
					nav={nav}
					currentRoute={currentRoute}
				/>
			))}
		</View>
	)
}
