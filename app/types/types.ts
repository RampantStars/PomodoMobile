import { Feather } from '@expo/vector-icons'

import { TypeRootStackParamsList } from '@/navigation/navigation.types'

export interface IUser {
	id: string
	email: string
	name: string
}

export type TUser = IUser | null

export interface IMenuItem {
	iconName: keyof typeof Feather.glyphMap
	path: keyof TypeRootStackParamsList
}

export type TNav = (name: keyof TypeRootStackParamsList) => void
