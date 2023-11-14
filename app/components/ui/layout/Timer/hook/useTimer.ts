import React, { useCallback } from 'react'

import { ITimerOptions } from '@/types/types'

import { ENUM_STATUS, restCircle, sessionCount } from '../const'

interface IUseTimer {}

export const useTimer = () => {
	const [timer, setTimer] = React.useState<ITimerOptions>({
		key: 0,
		isPlaying: false,
		currentSession: 0,
		currentBrakeSession: 0,
		status: ENUM_STATUS.WORK,
		isAllSessionCompleted: false
	} as ITimerOptions)

	const { currentSession, status } = timer
	const completeSession = useCallback(() => {
		setTimer((prev) => ({ ...prev, isPlaying: false, key: prev.key + 1 }))

		if (status === ENUM_STATUS.REST) {
			setTimer((prev) => ({
				...prev,
				key: prev.key + 1,
				currentSession: prev.currentSession + 1,
				status: ENUM_STATUS.WORK
			}))
			return
		}

		if (currentSession % restCircle && currentSession !== sessionCount - 1) {
			setTimer((prev) => ({
				...prev,
				currentBrakeSession: prev.currentBrakeSession + 1,
				status: ENUM_STATUS.REST
			}))
			return
		}

		setTimer((prev) => ({
			...prev,
			currentSession: prev.currentSession + 1
		}))
	}, [currentSession, status])

	return { completeSession, timer, setTimer }
}
