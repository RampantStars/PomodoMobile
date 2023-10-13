import { FC } from 'react'
import { Text, View } from 'react-native'

import { ITimerOptions } from '@/types/types'

import { ENUM_STATUS } from '../../const'

interface ITimerTextProps extends Pick<ITimerOptions, 'status'> {
	time: number
	brakeTime: number
}

export const TimerText: FC<ITimerTextProps> = ({ time, brakeTime, status }) => {
	let minutes: string | number = Math.floor(time / 60)
	let seconds: string | number = time % 60

	if (status === ENUM_STATUS.REST) {
		minutes = Math.floor(brakeTime / 60)
		seconds = brakeTime % 60
	}

	minutes = minutes.toString().length === 1 ? '0' + minutes : minutes
	seconds = seconds.toString().length === 1 ? '0' + seconds : seconds

	return (
		<View className='justify-around'>
			<Text className='self-center text-4xl text-white font-bold'>{`${minutes}:${seconds}`}</Text>
			<Text className='pl-4 self-center text-2xl text-white font-bold '>
				{status}
			</Text>
		</View>
	)
}
