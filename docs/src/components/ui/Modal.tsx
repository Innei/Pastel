import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  className,
}: ModalProps) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Backdrop with Framer Motion */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="fixed inset-0 z-50 bg-material-thick backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Modal Content with Framer Motion */}
            <Dialog.Content forceMount asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1], // Custom easing for smoother animation
                }}
                className={cn(
                  'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
                  'bg-background rounded-lg shadow-xl w-full max-h-[90vh] flex flex-col',
                  'focus:outline-none',
                  sizes[size],
                  className,
                )}
              >
                {/* Header */}
                {title && (
                  <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
                    <Dialog.Title className="text-lg font-semibold text-text">
                      {title}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="text-text-secondary hover:text-text transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  </div>
                )}

                {/* Close button when no title */}
                {!title && (
                  <Dialog.Close asChild>
                    <button className="absolute right-4 top-4 z-10 text-text-secondary hover:text-text transition-colors p-1">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                )}

                {/* Content - with scroll */}
                <div
                  className={cn('overflow-y-auto flex-1 p-6', title && 'pt-0')}
                >
                  {children}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
