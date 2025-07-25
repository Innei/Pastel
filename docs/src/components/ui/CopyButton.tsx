import { Check, Copy } from 'lucide-react'
import { useCallback, useState } from 'react'

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
      <button
        type="button"
        onClick={handleCopy}
        title={`Copy ${label}: ${value}`}
        className="group flex items-center justify-center p-2 rounded-md border border-border hover:bg-background-tertiary transition-all"
      >
        {isCopied ? (
          <Check className="w-4 h-4 text-green" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`group flex items-center gap-2 px-3 py-2 rounded-md border transition-all ${
        variant === 'primary'
          ? 'bg-accent text-white border-accent hover:bg-accent/90'
          : 'bg-background-secondary border-border hover:bg-background-tertiary'
      }`}
    >
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs opacity-95">{value}</span>
      {isCopied ? (
        <Check className="w-4 h-4 text-green" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  )
}
