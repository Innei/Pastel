import { Dialog } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import { AnimatePresence, m as motion } from 'motion/react'
import type { ReactNode } from 'react'

import { Spring } from '../../constants/spring'
import { cn } from '../../utils/cn'

interface ModalProps {
  children: ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg'
  title?: string
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(next) => !next && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal keepMounted>
            <Dialog.Backdrop
              render={
                <motion.div
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 z-50 bg-background-quaternary/20 backdrop-blur-[70px]"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={Spring.presets.smooth}
                />
              }
            />
            <Dialog.Popup
              render={
                <motion.div
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={Spring.presets.smooth}
                  className={cn(
                    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
                    'bg-background rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col',
                    'focus:outline-none',
                    sizes[size],
                    className,
                  )}
                />
              }
            >
              {title && (
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border flex-shrink-0">
                  <Dialog.Title className="text-sm font-semibold text-text">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close
                    className="text-text-secondary hover:text-text transition-colors"
                    render={
                      <button type="button">
                        <X className="w-4 h-4" />
                      </button>
                    }
                  />
                </div>
              )}

              {!title && (
                <Dialog.Close
                  className="absolute right-3 top-3 z-10 text-text-secondary hover:text-text transition-colors p-1"
                  render={
                    <button type="button">
                      <X className="w-4 h-4" />
                    </button>
                  }
                />
              )}

              <div className="overflow-y-auto flex-1 p-4">{children}</div>
            </Dialog.Popup>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
