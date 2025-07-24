import type { Transition } from 'motion/react'
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'
import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const smoothPreset: Transition = {
  type: 'spring',
  duration: 0.4,
  bounce: 0,
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider defaultTheme="system" disableTransitionOnChange enableSystem>
      <LazyMotion features={domAnimation}>
        <MotionConfig transition={smoothPreset}>{children}</MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  )
}
