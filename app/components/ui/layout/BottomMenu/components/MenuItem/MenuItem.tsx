import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable } from 'react-native'

import { IMenuItem, TNav } from '@/types/types'

import { ICON_SIZE } from '../../const'

import { COLOR } from '@/const/color'

interface IMenuItemProps {
  item: IMenuItem
  nav: TNav
  currentRoute?: string
}

export const MenuItem: FC<IMenuItemProps> = ({ item, currentRoute, nav }) => {
  const isActive = currentRoute === item.path
  return (
    <Pressable className='w-1/4' onPress={() => nav(item.path)}>
      <AntDesign
        name={item.iconName}
        size={ICON_SIZE}
        color={isActive ? COLOR.PRIMARY : COLOR.SECONDARY}
      ></AntDesign>
    </Pressable>
  )
}
