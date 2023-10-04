import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
	return (
		<View className='flex-1 items-center justify-center bg-stone-100'>
			<Text>Pomodoro Timer</Text>
			<StatusBar style='auto' />
		</View>
	)
}
