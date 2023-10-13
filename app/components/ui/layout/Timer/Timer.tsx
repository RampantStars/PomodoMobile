import React, { FC } from 'react'
import { View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { COLOR } from '@/const/color'

import { ITimerOptions } from '@/types/types'

import { Button, ProgressBar, TimerText } from './components'
import {
  ENUM_STATUS,
  breakDuration,
  flowDuration,
  isSmallIndicator,
  restCircle,
  sessionCount
} from './const'

export const Timer: FC = () => {
  const [timer, setTimer] = React.useState<ITimerOptions>({
    key: 0,
    isPlaying: false,
    currentSession: 0,
    currentBrakeSession: 0,
    status: ENUM_STATUS.WORK,
    isAllSessionCompleted: false
  } as ITimerOptions)

  const handleTimerComplete = () => {
    /**
     * TODO Проверить переключение
     */

    setTimer((prev) => ({ ...prev, isPlaying: false }))

    if (timer.currentSession === sessionCount - 1) {
      setTimer((prev) => ({
        ...prev,
        isAllSessionCompleted: true,
        status: ENUM_STATUS.COMPLETED
      }))
    }

    setTimer((prev) => ({ ...prev, key: prev.key + 1 }))

    if (timer.status === ENUM_STATUS.REST) {
      setTimer((prev) => ({
        ...prev,
        currentSession: prev.currentSession + 1,
        status: ENUM_STATUS.WORK
      }))
    }

    if (timer.currentSession % restCircle) {
      setTimer((prev) => ({
        ...prev,
        currentBrakeSession: prev.currentBrakeSession + 1,
        status: ENUM_STATUS.REST
      }))
    } else {
      setTimer((prev) => ({ ...prev, currentSession: prev.currentSession + 1 }))
    }
  }

  const handleNextSession = () => {
    if (timer.currentSession < sessionCount) {
      setTimer((prev) => ({
        ...prev,
        currentSession: prev.currentSession + 1,
        key: prev.key + 1,
        isPlaying: false
      }))

      if (timer.currentSession % restCircle) {
        setTimer((prev) => ({
          ...prev,
          currentBrakeSession: prev.currentBrakeSession + 1
        }))
      }
    }
  }

  const handlePrevSession = () => {
    if (timer.currentSession > 0) {
      setTimer((prev) => ({
        ...prev,
        currentSession: prev.currentSession - 1,
        key: prev.key - 1,
        isPlaying: false
      }))

      if (timer.currentBrakeSession * restCircle === timer.currentSession) {
        setTimer((prev) => ({
          ...prev,
          currentBrakeSession: prev.currentBrakeSession - 1
        }))
      }
    }
  }

  const handleRefreshSession = () => {
    setTimer({
      key: 0,
      isPlaying: false,
      currentSession: 0,
      currentBrakeSession: 0,
      status: ENUM_STATUS.WORK,
      isAllSessionCompleted: false
    })
  }

  const isRest = timer.status === ENUM_STATUS.REST

  return (
    <View className='flex-1 justify-around items-center'>
      <View className='self-center mb-5'>
        <Button
          className='self-end bg-transparent opacity-50'
          icon='md-refresh'
          color={COLOR.WHITE}
          onPress={handleRefreshSession}
        />
        <CountdownCircleTimer
          key={timer.key}
          isPlaying={timer.isPlaying}
          duration={isRest ? breakDuration : flowDuration}
          // @ts-ignore
          colors={[COLOR.PURPLE, COLOR.PRIMARY]}
          // @ts-ignore
          trailColor={COLOR.GRAY}
          colorsTime={[isRest ? breakDuration : flowDuration, 0]}
          size={250}
          strokeWidth={10}
          onComplete={handleTimerComplete}
        >
          {({ remainingTime }) => (
            <TimerText
              time={remainingTime}
              brakeTime={breakDuration}
              status={timer.status}
            />
          )}
        </CountdownCircleTimer>

        <ProgressBar
          status={timer.status}
          restCircle={restCircle}
          sessionCount={sessionCount}
          currentSession={timer.currentSession}
          isSmallIndicator={isSmallIndicator}
          currentBrakeSession={timer.currentBrakeSession}
        />
      </View>
      <View className='mt-2 flex-row'>
        <Button
          className='self-center bg-transparent opacity-70'
          icon='chevron-back'
          color={COLOR.WHITE}
          onPress={handlePrevSession}
        />
        <Button
          disabled={timer.isAllSessionCompleted}
          className='self-center'
          icon={timer.isPlaying ? 'ios-pause' : 'ios-play'}
          color={COLOR.WHITE}
          onPress={() =>
            setTimer((prev) => ({ ...prev, isPlaying: !prev.isPlaying }))
          }
        />
        <Button
          className='self-center bg-transparent opacity-70'
          icon='chevron-forward'
          color={COLOR.WHITE}
          onPress={handleNextSession}
        />
      </View>
    </View>
  )
}
