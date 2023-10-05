import { FC } from 'react'
import { ActivityIndicator } from 'react-native'

import { COLOR } from '@/const/color'

export const Loader: FC = () => {
	return <ActivityIndicator color={COLOR.PRIMARY} size={'large'} />
}
