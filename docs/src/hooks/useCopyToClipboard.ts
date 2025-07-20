import { useCallback,useState } from 'react'

export function useCopyToClipboard(timeout = 2000): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      
      setTimeout(() => {
        setCopied(false)
      }, timeout)
    } catch (error) {
      console.error('Failed to copy:', error)
      setCopied(false)
    }
  }, [timeout])

  return [copied, copy]
}