import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
	Keyboard,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native'

import { Button, Loader } from '@/components/ui/layout'

import { useAuth } from '@/hooks/useAuth'

import { AUTH_LABEL, BUTTON_LABEL } from '@/const/label'

import { IAuthFormData } from '@/types/types'

import { AuthFields } from './components/AuthFields'

export const Auth: FC = () => {
	const [isReg, setIsReg] = React.useState(false)

	const { setUser } = useAuth()

	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
		setUser({
			id: '',
			name: data.name,
			email: data.email
		})
		reset()
	}

	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='flex-1 items-center justify-center h-screen gap-4'>
				<Text className='text-white text-4xl font-bold  text-center '>
					{isReg ? AUTH_LABEL.REGISTRATION : AUTH_LABEL.LOG_IN}
				</Text>
				{isLoading ? (
					<Loader />
				) : (
					<View className='w-4/6'>
						<AuthFields control={control} />

						<Button
							onPress={handleSubmit(onSubmit)}
							className='bg-primary w-full mt-5'
							text={isReg ? BUTTON_LABEL.REGISTRATION : BUTTON_LABEL.LOG_IN}
						></Button>

						<View className='flex-row self-center '>
							<Text className='text-white  text-sm font-bold mt-6 mr-3 text-center opacity-50'>
								{isReg
									? AUTH_LABEL.ALREADY_HAVE_ACCOUNT
									: AUTH_LABEL.NO_ACCOUNT}
							</Text>
							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-primary  text-sm font-bold mt-6  text-center opacity-50'>
									{isReg ? BUTTON_LABEL.LOG_IN : BUTTON_LABEL.REGISTRATION}
								</Text>
							</Pressable>
						</View>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	)
}
