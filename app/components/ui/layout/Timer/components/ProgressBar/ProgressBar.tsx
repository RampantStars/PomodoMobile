import { Ionicons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { View } from 'react-native'

import { COLOR } from '@/const/color'
import { ICON_SIZE } from '@/const/icon'

import { ITimerOptions } from '@/types/types'

import { ENUM_STATUS } from '../../const'
import { useTimer } from '../../hook'

interface IProgressBarProps
	extends Pick<
		ITimerOptions,
		'currentSession' | 'currentBrakeSession' | 'status'
	> {
	sessionCount: number
	restCircle: number
	isSmallIndicator: boolean
}

export const ProgressBar: FC<IProgressBarProps> = ({
	currentSession,
	sessionCount,
	isSmallIndicator,
	restCircle,
	status,
	currentBrakeSession
}) => {
	return (
		<View className='mt-7 flex-row items-center justify-center'>
			{Array.from(Array(sessionCount)).map((_, index) => (
				<View className='flex-row items-center relative' key={`key-${index}`}>
					<View
						className={cn(
							' rounded-full',
							currentSession > index
								? 'bg-primary'
								: 'border-transparent bg-secondary opacity-50',
							currentSession === index &&
								`w-6 h-6 bg-transparent border-primary opacity-70 ${
									isSmallIndicator ? 'border-2' : 'border-4'
								}`,
							isSmallIndicator ? ' w-3 h-3' : 'w-4 h-4'
						)}
					/>

					{!((index + 1) % restCircle) && index + 1 !== sessionCount && (
						<View
							className={cn(
								'absolute z-30   w-5 h-5',
								isSmallIndicator ? 'left-2.5 -top-3' : 'left-4 -top-4'
							)}
						>
							<Ionicons
								name='bed-sharp'
								color={
									currentBrakeSession > index / restCircle
										? COLOR.PRIMARY
										: COLOR.SECONDARY
								}
								size={
									isSmallIndicator ? ICON_SIZE.VERY_SMALL : ICON_SIZE.LITTLE
								}
							/>
						</View>
					)}

					{index !== sessionCount - 1 && (
						<View
							className={cn(
								'h-0.5  opacity-50',
								currentSession > index ? 'bg-primary' : 'bg-secondary',
								isSmallIndicator ? ' w-2' : 'w-4'
							)}
						/>
					)}
				</View>
			))}
		</View>
	)
}
