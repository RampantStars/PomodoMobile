import cn from 'clsx'
import React, { FC } from 'react'
import { Pressable, PressableProps, Text, TextProps } from 'react-native'

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
			className={cn('self-center py-2 px-6 rounded-full', className)}
			{...props}
		>
			<Text className='font-semibold text-white text-center'>{text}</Text>
		</Pressable>
	)
}
