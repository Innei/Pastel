import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import type { ColorVariants } from '@color-system/colors'

interface Props {
  name: string
  colorSet: ColorVariants
  variant: 'light' | 'dark'
}

export default function ColorDetails({ name, colorSet, variant }: Props) {
  const [copiedOklch, copyOklch] = useCopyToClipboard()
  const [copiedSrgb, copySrgb] = useCopyToClipboard()
  const [copiedP3, copyP3] = useCopyToClipboard()

  const color = colorSet[variant]

  return (
    <div className="bg-element rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium capitalize">{name} - {variant}</h4>
        <div 
          className="w-12 h-12 rounded-lg shadow-sm"
          style={{ backgroundColor: color.srgb }}
        />
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between group">
          <span className="text-text-secondary">OKLCH:</span>
          <button
            onClick={() => copyOklch(color.oklch)}
            className="font-mono text-text hover:text-primary transition-colors cursor-pointer"
          >
            {color.oklch}
            {copiedOklch && <span className="ml-2 text-xs text-green">Copied!</span>}
          </button>
        </div>
        
        <div className="flex items-center justify-between group">
          <span className="text-text-secondary">sRGB:</span>
          <button
            onClick={() => copySrgb(color.srgb)}
            className="font-mono text-text hover:text-primary transition-colors cursor-pointer"
          >
            {color.srgb}
            {copiedSrgb && <span className="ml-2 text-xs text-green">Copied!</span>}
          </button>
        </div>
        
        {color.p3 && (
          <div className="flex items-center justify-between group">
            <span className="text-text-secondary">P3:</span>
            <button
              onClick={() => copyP3(color.p3!)}
              className="font-mono text-text hover:text-primary transition-colors cursor-pointer"
            >
              {color.p3}
              {copiedP3 && <span className="ml-2 text-xs text-green">Copied!</span>}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}