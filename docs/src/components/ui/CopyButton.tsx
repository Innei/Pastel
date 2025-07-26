import { Check, Copy } from 'lucide-react'
import { m } from 'motion/react'
import { useCallback, useState } from 'react'

import { microReboundPreset, reboundPreset } from '../../constants/spring'

interface CopyButtonProps {
  value: string
  label: string
  variant?: 'default' | 'primary' | 'icon'
  onCopy?: (value: string) => void
}

export function CopyButton({
  value,
  label,
  variant = 'default',
  onCopy,
}: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)
      onCopy?.(value)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
    }
  }, [value, onCopy])

  if (variant === 'icon') {
    return (
      <m.button
        type="button"
        onClick={handleCopy}
        title={`Copy ${label}: ${value}`}
        className="group flex items-center justify-center p-2 rounded-md border border-border hover:bg-background-tertiary transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={microReboundPreset}
      >
        <m.div
          key={isCopied ? 'check' : 'copy'}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={reboundPreset}
        >
          {isCopied ? (
            <Check className="w-4 h-4 text-green" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </m.div>
      </m.button>
    )
  }

  return (
    <m.button
      type="button"
      onClick={handleCopy}
      className={`group flex items-center gap-2 px-3 py-2 rounded-md border transition-all ${
        variant === 'primary'
          ? 'bg-accent text-white border-accent hover:bg-accent/90'
          : 'bg-background-secondary border-border hover:bg-background-tertiary'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={microReboundPreset}
    >
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs opacity-95">{value}</span>
      <m.div
        key={isCopied ? 'check' : 'copy'}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={reboundPreset}
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-green" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </m.div>
    </m.button>
  )
}
