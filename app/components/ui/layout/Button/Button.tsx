import cn from 'clsx'
import React, { FC } from 'react'
import { Pressable, PressableProps, Text, TextProps } from 'react-native'

import { COLOR } from '@/const/color'

export interface IButton extends PressableProps {
	text: string
}

export const Button: FC<React.PropsWithChildren<IButton>> = ({
	text,
	className,
	...props
}) => {
	return (
		<Pressable
			style={{
				shadowColor: COLOR.WHITE,
				shadowOffset: {
					width: 0,
					height: 0
				},
				shadowOpacity: 0.7,
				shadowRadius: 10,

				elevation: 20
			}}
			className={cn('self-center py-2 px-6 rounded-full', className)}
			{...props}
		>
			<Text className='font-semibold text-white text-center'>{text}</Text>
		</Pressable>
	)
}
