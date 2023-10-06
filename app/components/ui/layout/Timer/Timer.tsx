import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import { COLOR } from '@/const/color'

import { Button, ProgressBar, TimerText } from './components'

const dataTime = [
  {
    id: 1,
    current: true,
    complied: false
  },
  {
    id: 2,
    current: false,
    complied: false
  },
  {
    id: 3,
    current: false,
    complied: false
  },
  {
    id: 4,
    current: false,
    complied: false
  },
  {
    id: 5,
    current: false,
    complied: false
  }
]

export const Timer: FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [status, setStatus] = React.useState<'rest' | 'work'>('rest')
  const [data, setData] = React.useState(dataTime)
  const [currentSession, setCurrentSession] = React.useState(1)



  const flowDuration = 1 * 60
  const sessionCount = 7
  const breakDuration = 1 * 60

  const updateData = (id, current, complied) => {
    const updatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, current: current, complied: complied }
      }
      return item
    })
    setData(updatedData)
  }

  const handleTimerComplete = () => {
    updateData(currentSession, false, true)
    setCurrentSession(currentSession + 1)

    // Установить current: true для следующего элемента в массиве data
    if (currentSession < sessionCount) {
      const nextSession = currentSession + 1;
      updateData(nextSession, true, false);
    }
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <View className='self-center mb-5'>
        <Text className='text-center mb-3 text-4xl'>
          {status === 'work' ? '🔥' : '😴'}
        </Text>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={flowDuration}
          // @ts-ignore
          colors={[COLOR.PURPLE, COLOR.PRIMARY]}
          // @ts-ignore
          trailColor={COLOR.GRAY}
          colorsTime={[flowDuration, 0]}
          size={250}
          strokeWidth={5}
          onComplete={handleTimerComplete}

        >
          {({ remainingTime }) => <TimerText time={remainingTime} />}
        </CountdownCircleTimer>

        <ProgressBar data={data} />
      </View>

      <Button
        className='self-center'
        icon={isPlaying ? 'ios-pause' : 'ios-play'}
        color='white'
        onPress={() => setIsPlaying(!isPlaying)}
      />
    </View >
  )
}
