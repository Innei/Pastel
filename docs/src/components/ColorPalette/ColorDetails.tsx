import type {RegularColorName} from '@pastel-palette/colors';
import { colorPalette  } from '@pastel-palette/colors'

interface ColorDetailsProps {
  colorName: string
  onCopy: (value: string) => void
}

export function ColorDetails({ colorName, onCopy }: ColorDetailsProps) {
  const colorVariants =
    colorPalette.colors.regular[colorName as RegularColorName]

  if (!colorVariants) return null

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold capitalize">{colorName}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Light Variant</h4>
          <div className="space-y-1">
            <button
              onClick={() => onCopy(colorVariants.light.oklch)}
              className="w-full text-left p-2 rounded border border-border hover:bg-muted transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">OKLCH</span>
                <span className="text-xs font-mono">
                  {colorVariants.light.oklch}
                </span>
              </div>
            </button>
            <button
              onClick={() => onCopy(colorVariants.light.srgb)}
              className="w-full text-left p-2 rounded border border-border hover:bg-muted transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">sRGB</span>
                <span className="text-xs font-mono">
                  {colorVariants.light.srgb}
                </span>
              </div>
            </button>
            {colorVariants.light.p3 && (
              <button
                onClick={() => onCopy(colorVariants.light.p3!)}
                className="w-full text-left p-2 rounded border border-border hover:bg-muted transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">P3</span>
                  <span className="text-xs font-mono">
                    {colorVariants.light.p3}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Dark Variant</h4>
          <div className="space-y-1">
            <button
              onClick={() => onCopy(colorVariants.dark.oklch)}
              className="w-full text-left p-2 rounded border border-border hover:bg-muted transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">OKLCH</span>
                <span className="text-xs font-mono">
                  {colorVariants.dark.oklch}
                </span>
              </div>
            </button>
            <button
              onClick={() => onCopy(colorVariants.dark.srgb)}
              className="w-full text-left p-2 rounded border border-border hover:bg-muted transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">sRGB</span>
                <span className="text-xs font-mono">
                  {colorVariants.dark.srgb}
                </span>
              </div>
            </button>
            {colorVariants.dark.p3 && (
              <button
                onClick={() => onCopy(colorVariants.dark.p3!)}
                className="w-full text-left p-2 rounded border border-border hover:bg-muted transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">P3</span>
                  <span className="text-xs font-mono">
                    {colorVariants.dark.p3}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
