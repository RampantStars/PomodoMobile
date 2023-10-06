import { FC } from 'react'
import { Text } from 'react-native'

export const TimerText: FC<{ time: number }> = ({ time }) => {
	let minutes: string | number = Math.floor(time / 60)
	minutes = minutes.toString().length === 1 ? '0' + minutes : minutes

	let seconds: string | number = time % 60
	seconds = seconds.toString().length === 1 ? '0' + seconds : seconds

	return (
		<Text className='self-center text-4xl text-white font-bold'>{`${minutes}:${seconds}`}</Text>
	)
}
