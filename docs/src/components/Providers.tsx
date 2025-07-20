import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" disableTransitionOnChange enableSystem>
      {children}
    </ThemeProvider>
  )
}
