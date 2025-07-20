import { ChevronDown } from 'lucide-react'
import { useEffect,useRef, useState } from 'react'

interface DropdownOption {
  value: string
  label: string
  description?: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function Dropdown({ options, value, onChange, placeholder, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(option => option.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full cursor-pointer rounded-md bg-background border border-border py-2 pl-3 pr-10 text-left shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent hover:border-border-secondary transition-colors"
      >
        <span className="block truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDown 
            className={`h-4 w-4 text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            aria-hidden="true" 
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md bg-background border border-border shadow-xl">
          <div className="max-h-60 overflow-auto py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`relative w-full cursor-pointer select-none py-2 pl-3 pr-9 text-left hover:bg-background-secondary transition-colors ${
                  option.value === value ? 'bg-background-secondary text-accent' : 'text-text'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`block truncate font-medium ${option.value === value ? 'font-semibold' : ''}`}>
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
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}