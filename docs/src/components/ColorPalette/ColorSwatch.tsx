import { useState } from 'react'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import type { ColorVariants } from '@pastel-palette/colors'

interface Props {
  name: string
  variants: ColorVariants
}

export default function ColorSwatch({ name, variants }: Props) {
  const [copied, copy] = useCopyToClipboard()
  const [selectedVariant, setSelectedVariant] = useState<'light' | 'dark'>('light')

  const handleCopy = (value: string) => {
    copy(value)
  }

  return (
    <div className="group relative">
      <div
        className="aspect-square rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
        style={{ backgroundColor: variants[selectedVariant].srgb }}
        onClick={() => handleCopy(variants[selectedVariant].oklch)}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl" />

        {copied && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white bg-black/70 px-2 py-1 rounded text-sm">
              Copied!
            </span>
          </div>
        )}
      </div>

      <div className="mt-3">
        <h3 className="font-medium capitalize">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
          {variants[selectedVariant].oklch}
        </p>
      </div>

      <div className="mt-2 flex gap-1">
        <button
          className={`px-2 py-1 text-xs rounded ${
            selectedVariant === 'light'
              ? 'bg-gray-200 dark:bg-gray-700'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          onClick={() => setSelectedVariant('light')}
        >
          Light
        </button>
        <button
          className={`px-2 py-1 text-xs rounded ${
            selectedVariant === 'dark'
              ? 'bg-gray-200 dark:bg-gray-700'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
          onClick={() => setSelectedVariant('dark')}
        >
          Dark
        </button>
      </div>
    </div>
  )
}