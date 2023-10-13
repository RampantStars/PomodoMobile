import { Feather } from '@expo/vector-icons'

import { ENUM_STATUS } from '@/components/ui/layout/Timer/const'

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

export interface IAuthFormData {
	password: string
	name: string
	email: string
}

export interface ITimerOptions {
	key: number
	isPlaying: boolean
	status: ENUM_STATUS
	currentSession: number
	currentBrakeSession: number
	isAllSessionCompleted: boolean
}
