import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthProvider } from './app/providers/AuthProvider'
import { NavigationPanel } from '@/navigation/NavigationPanel'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationPanel />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style='light' />
    </QueryClientProvider>
  )
}
