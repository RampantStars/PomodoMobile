import React, { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TNav } from '@/types/types'

import { MenuItem } from './components'
import { menuData } from './const'

interface IBottomMenu {
  nav: TNav
  currentRoute?: string
}

export const BottomMenu: FC<IBottomMenu> = ({ currentRoute, nav }) => {
  const { bottom } = useSafeAreaInsets()

  return (
    <View
      className='bg-primary-dark'
      style={{ paddingBottom: bottom + 5 }}
    >
      {menuData.map((item) => (
        <MenuItem
          key={item.iconName}
          item={item}
          nav={nav}
          currentRoute={currentRoute}
        />
      ))}
    </View>
  )
}
