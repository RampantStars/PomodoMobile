import {
  NavigationContainer,
  useNavigationContainerRef
} from '@react-navigation/native'
import React, { FC } from 'react'

import { BottomMenu } from '@/components/ui/layout'

import { useAuth } from '@/hooks/useAuth'

import { PrivateNavigation } from './PrivateNavigation'

export const NavigationPanel: FC = () => {
  const { user } = useAuth()

  const [currentRoute, setCurrentRoute] = React.useState<string | undefined>(
    undefined
  )

  const navRef = useNavigationContainerRef()

  React.useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name)

    const listener = navRef.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    )

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigation />
      </NavigationContainer>
      {user && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  )
}
