import cn from 'clsx'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

type TItem = {
	id: number
	current: boolean
	complied: boolean
}

interface IProgressBarProps {
	data: TItem[]
}

export const ProgressBar: FC<IProgressBarProps> = ({ data }) => {
	return (
		<View className='mt-7 flex-row items-center justify-center'>
			{data.map((item, index) => (
				<View className='flex-row items-center'>
					<View
						className={cn(
							'w-4 h-4 rounded-full',
							item.complied
								? 'bg-primary'
								: 'border-transparent bg-secondary opacity-50',
							item.current &&
								' w-6 h-6 bg-transparent border-primary border-4 opacity-70'
						)}
						key={item.id}
					/>
					{index !== data.length - 1 && (
						<View
							className={cn(
								'w-4 h-0.5  opacity-50',
								item.complied ? 'bg-primary' : 'bg-secondary'
							)}
						/>
					)}
				</View>
			))}
		</View>
	)
}
