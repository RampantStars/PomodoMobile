import { FC } from 'react'

import { Button } from '@/components/ui/layout'
import { Layout } from '@/components/ui/layout/Layout'

import { useAuth } from '@/hooks/useAuth'

export const Profile: FC = () => {
	const { setUser } = useAuth()

	return (
		<Layout title='Профиль'>
			<Button
				className='bg-primary w-4/6 mt-5'
				text='Выход'
				onPress={() => setUser(null)}
			/>
		</Layout>
	)
}
