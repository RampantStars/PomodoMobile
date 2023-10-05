import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'

import { IMenuItem, TNav } from '@/types/types'

import { ICON_SIZE } from '../../const'

import { COLOR } from '@/const/color'

interface IMenuItemProps {
	item: IMenuItem
	nav: TNav
	currentRoute?: string
}

export const MenuItem: FC<IMenuItemProps> = ({ item, currentRoute, nav }) => {
	const isActive = currentRoute === item.path
	return (
		<Pressable
			className='p-2 w-1/4 items-center'
			onPress={() => nav(item.path)}
		>
			<Feather
				name={item.iconName}
				size={ICON_SIZE}
				color={isActive ? COLOR.PRIMARY : COLOR.SECONDARY}
			></Feather>
		</Pressable>
	)
}
