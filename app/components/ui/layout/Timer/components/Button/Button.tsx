import { Ionicons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'

import { BUTTON_SIZE } from '@/const/button'
import { COLOR } from '@/const/color'

interface IButtonProps extends PressableProps {
	icon: keyof typeof Ionicons.glyphMap
	color: string
}

export const Button: FC<IButtonProps> = ({
	icon,
	color,
	onPress,
	className,
	...props
}) => {
	return (
		<Pressable
			className={cn(
				'bg-primary disabled:opacity-50 rounded-full w-16 h-16 items-center justify-center',
				className
			)}
			onPress={onPress}
			style={{
				shadowColor: COLOR.WHITE,
				shadowOffset: {
					width: 0,
					height: 0
				},
				shadowOpacity: 0.7,
				shadowRadius: 10,

				elevation: 0
			}}
			{...props}
		>
			<Ionicons
				style={{ alignSelf: 'center' }}
				name={icon}
				color={color}
				size={BUTTON_SIZE.BIG}
			></Ionicons>
		</Pressable>
	)
}
