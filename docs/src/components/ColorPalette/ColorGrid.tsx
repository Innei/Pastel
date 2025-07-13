import { colorPalette } from '@color-system/colors'
import ColorSwatch from './ColorSwatch'

export default function ColorGrid() {
  const { regular } = colorPalette.colors

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Object.entries(regular).map(([name, variants]) => (
        <ColorSwatch key={name} name={name} variants={variants} />
      ))}
    </div>
  )
}