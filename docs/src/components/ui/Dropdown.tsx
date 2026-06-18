import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface DropdownOption {
  description?: string
  label: string
  value: string
}

interface DropdownProps {
  className?: string
  onChange: (value: string) => void
  options: DropdownOption[]
  placeholder?: string
  value: string
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder,
  className = '',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonPosition, setButtonPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  })

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Update button position when dropdown opens
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setButtonPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      })
    }
  }, [isOpen])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <button
        className="relative w-full cursor-pointer rounded-md bg-background border border-border py-1 pl-2.5 pr-8 text-left text-[13px] shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 hover:border-border-secondary transition-colors"
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDown
            aria-hidden="true"
            className={`h-4 w-4 text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="mt-1 rounded-md bg-background border border-border shadow-xl"
            ref={dropdownRef}
            style={{
              position: 'absolute',
              top: `${buttonPosition.top}px`,
              left: `${buttonPosition.left}px`,
              width: `${buttonPosition.width}px`,
            }}
          >
            <div className="max-h-60 overflow-auto py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`relative w-full cursor-pointer select-none py-1 pl-2.5 pr-8 text-left text-[13px] hover:bg-background-tertiary transition-colors ${
                    option.value === value
                      ? 'bg-accent/10 text-accent font-medium '
                      : 'text-text hover:bg-accent/15'
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  <div className="flex flex-col">
                    <span
                      className={`block truncate font-medium ${option.value === value ? 'font-semibold' : ''}`}
                    >
                      {option.label}
                    </span>
                    {option.description && (
                      <span className="text-xs text-text-secondary">
                        {option.description}
                      </span>
                    )}
                  </div>
                  {option.value === value && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-accent">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
