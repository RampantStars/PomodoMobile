import { FC } from 'react'

import { Timer } from '@/components/ui/layout'
import { Layout } from '@/components/ui/layout/Layout'

export const Home: FC = () => {
	return (
		<Layout title='Главная'>
			<Timer />
		</Layout>
	)
}
