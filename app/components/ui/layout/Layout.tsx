import React, { FC } from 'react'
import { Platform, SafeAreaView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Layout: FC<React.PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	const { top } = useSafeAreaInsets()
	return (
		<SafeAreaView className='flex-1'>
			<View
				className='flex-1 px-6'
				style={{
					paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.5
				}}
			>
				{title && (
					<Text className='text-2xl text-white text-center font-semibold'>
						{title}
					</Text>
				)}
				<View className='flex-1'>{children}</View>
			</View>
		</SafeAreaView>
	)
}
