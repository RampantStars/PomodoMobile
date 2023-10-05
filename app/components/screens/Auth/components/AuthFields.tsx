import cn from 'clsx'
import React, { FC } from 'react'
import { Control, Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IAuthFormData } from '@/types/types'

import { validateEmail } from '../email.rgx'

export const AuthFields: FC<{ control: Control<IAuthFormData> }> = ({
	control
}) => {
	return (
		<View className='grid gap-4'>
			<Controller
				control={control}
				name='email'
				rules={{
					required: 'Email обязателен',
					pattern: {
						value: validateEmail,
						message: 'Невалидный email'
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<View className='grid gap-2'>
						<Text className='text-white text-sm font-bold mt-6 mr-3 '>
							Email
						</Text>
						<TextInput
							className={cn(
								'p-3 bg-input-gray rounded-xl border text-white ',
								!!error ? 'border-red-500' : 'border-transparent'
							)}
							placeholder='ВВедите Email'
							onChangeText={onChange}
							autoCapitalize='none'
							onBlur={onBlur}
						/>
						{error && (
							<Text className='text-red-500 text-sm font-bold mt-6 mr-3 '>
								{error.message}
							</Text>
						)}
					</View>
				)}
			/>

			<Controller
				control={control}
				name='password'
				rules={{
					required: 'Пароль обязателен',
					minLength: {
						value: 8,
						message: 'Пароль должен быть не менее 8 символов'
					}
				}}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error }
				}) => (
					<View className='grid gap-2'>
						<Text className='text-white text-sm font-bold mt-6 mr-3 '>
							Пароль
						</Text>
						<TextInput
							className={cn(
								'p-3 bg-input-gray rounded-xl border text-white ',
								!!error ? 'border-red-500' : 'border-transparent'
							)}
							placeholder='Вdедите Пароль'
							onChangeText={onChange}
							autoCapitalize='none'
							onBlur={onBlur}
						/>
						{error && (
							<Text className='text-red-500 text-sm font-bold mt-6 mr-3 '>
								{error.message}
							</Text>
						)}
					</View>
				)}
			/>
		</View>
	)
}
