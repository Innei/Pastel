interface ColorSwatchProps {
  color: string
  name: string
  shade?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
}

export function ColorSwatch({
  color,
  name,
  shade,
  onClick,
  size = 'md',
  showLabel = true,
  className = '',
}: ColorSwatchProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  }

  return (
    <button
      onClick={onClick}
      className={`group ${className}`}
      aria-label={`${name} color swatch`}
    >
      <div className="space-y-2">
        <div
          className={`${sizeClasses[size]} rounded-md border border-border transition-all group-hover:scale-105`}
          style={{ backgroundColor: color }}
        />
        {showLabel && (
          <div className="text-left">
            <p className="text-sm font-medium capitalize">{name}</p>
            {shade && <p className="text-xs text-muted">{shade}</p>}
            <p className="text-xs text-muted font-mono">{color}</p>
          </div>
        )}
      </div>
    </button>
  )
}
