'use client'

import {
  AlertTriangle,
  CheckCircle,
  Download,
  Heart,
  Loader2,
  Plus,
  Settings,
  Share2,
  Trash2,
  X,
} from 'lucide-react'
import { m as motion } from 'motion/react'
import { useState } from 'react'

import { microReboundPreset, softSpringPreset } from '../../constants/spring'
import { cn } from '../../utils/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  icon?: 'left' | 'right'
  iconElement?: React.ReactNode
  className?: string
  [key: string]: any
}

function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  icon,
  iconElement,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent text-white hover:opacity-90 focus:ring-accent',
    secondary:
      'bg-background-secondary text-text border border-border hover:bg-fill focus:ring-accent',
    outline: 'border border-border text-text hover:bg-fill focus:ring-accent',
    ghost: 'text-text hover:bg-fill focus:ring-accent',
    destructive: 'bg-red text-white hover:opacity-90 focus:ring-red',
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  }

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { y: -1, scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      transition={microReboundPreset}
      {...props}
    >
      {loading && <Loader2 className={`${iconSizes[size]} animate-spin`} />}
      {!loading && iconElement && icon === 'left' && (
        <span className={iconSizes[size]}>{iconElement}</span>
      )}
      <span>{children}</span>
      {!loading && iconElement && icon === 'right' && (
        <span className={iconSizes[size]}>{iconElement}</span>
      )}
    </motion.button>
  )
}

export function ButtonExamples() {
  const [isLoading, setIsLoading] = useState(false)
  const [likedButtons, setLikedButtons] = useState<Set<string>>(new Set())

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleLike = (buttonId: string) => {
    setLikedButtons((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(buttonId)) {
        newSet.delete(buttonId)
      } else {
        newSet.add(buttonId)
      }
      return newSet
    })
  }

  return (
    <div className="card p-8 space-y-12">
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={softSpringPreset}
      >
        <h4 className="heading-3 text-text mb-4">Button System</h4>
        <p className="text-text-secondary text-lg leading-relaxed mb-6">
          A comprehensive button system showcasing our OKLCH color palette with
          semantic variants, sizes, and interactive states designed for optimal
          user experience.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto" />
      </motion.div>

      <div className="space-y-12">
        {/* Button Variants */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.1 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">Semantic Variants</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-text-secondary">
            Five semantic button variants covering all common use cases in
            modern applications.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </motion.section>

        {/* Color Palette Integration */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">OKLCH Color Integration</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-text-secondary">
            Demonstrating our color system with direct color access for specific
            design needs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <Button className="bg-pink text-white hover:opacity-90">
              Pink
            </Button>
            <Button className="bg-purple text-white hover:opacity-90">
              Purple
            </Button>
            <Button className="bg-blue text-white hover:opacity-90">
              Blue
            </Button>
            <Button className="bg-green text-white hover:opacity-90">
              Green
            </Button>
            <Button className="bg-yellow text-black hover:opacity-90">
              Yellow
            </Button>
            <Button className="bg-orange text-white hover:opacity-90">
              Orange
            </Button>
          </div>
        </motion.section>

        {/* Button Sizes */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.3 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">Size Variations</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-text-secondary">
            Three carefully proportioned sizes with consistent spacing and
            typography scales.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="primary" size="md">
              Medium Button
            </Button>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
          </div>
        </motion.section>

        {/* Interactive States */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">Interactive States</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-text-secondary">
            Comprehensive state management including hover, focus, disabled, and
            loading states.
          </p>
          <div className="bg-background-secondary p-6 rounded-xl border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-3">
                <h6 className="text-sm font-semibold text-text">Normal</h6>
                <Button variant="primary">Active Button</Button>
              </div>
              <div className="space-y-3">
                <h6 className="text-sm font-semibold text-text">Disabled</h6>
                <Button variant="primary" disabled>
                  Disabled Button
                </Button>
              </div>
              <div className="space-y-3">
                <h6 className="text-sm font-semibold text-text">Loading</h6>
                <Button
                  variant="primary"
                  loading={isLoading}
                  onClick={handleLoadingDemo}
                >
                  {isLoading ? 'Processing...' : 'Start Loading'}
                </Button>
              </div>
              <div className="space-y-3">
                <h6 className="text-sm font-semibold text-text">Focus</h6>
                <Button variant="primary" className="focus:ring-4">
                  Focus Me
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Icon Integration */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">Icon Integration</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-text-secondary">
            Flexible icon positioning with automatic sizing and proper spacing
            relationships.
          </p>
          <div className="space-y-6">
            <div>
              <h6 className="text-sm font-medium text-text mb-3">
                Icons with Actions
              </h6>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  icon="left"
                  iconElement={<Plus className="w-4 h-4" />}
                >
                  Add Item
                </Button>
                <Button
                  variant="secondary"
                  icon="left"
                  iconElement={<Download className="w-4 h-4" />}
                >
                  Download
                </Button>
                <Button
                  variant="outline"
                  icon="left"
                  iconElement={<Settings className="w-4 h-4" />}
                >
                  Settings
                </Button>
                <Button
                  variant="destructive"
                  icon="left"
                  iconElement={<Trash2 className="w-4 h-4" />}
                >
                  Delete
                </Button>
              </div>
            </div>

            <div>
              <h6 className="text-sm font-medium text-text mb-3">
                Interactive Icons
              </h6>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant={likedButtons.has('like1') ? 'primary' : 'outline'}
                  icon="left"
                  iconElement={
                    <Heart
                      className={cn(
                        'w-4 h-4',
                        likedButtons.has('like1') ? 'fill-current' : '',
                      )}
                    />
                  }
                  onClick={() => handleLike('like1')}
                >
                  {likedButtons.has('like1') ? 'Liked' : 'Like'}
                </Button>
                <Button
                  variant="ghost"
                  icon="left"
                  iconElement={<Share2 className="w-4 h-4" />}
                >
                  Share
                </Button>
                <Button
                  variant="secondary"
                  icon="right"
                  iconElement={<CheckCircle className="w-4 h-4" />}
                >
                  Complete
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Real-world Examples */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">Real-world Examples</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <p className="text-text-secondary">
            Common UI patterns and use cases demonstrating practical button
            implementations.
          </p>
          <div className="space-y-8">
            {/* Form Actions */}
            <div className="bg-gradient-to-br from-background to-background-secondary p-6 rounded-xl border border-border">
              <h6 className="text-sm font-medium text-text mb-4">
                Form Actions
              </h6>
              <div className="flex flex-wrap gap-3 justify-end">
                <Button variant="ghost">Cancel</Button>
                <Button variant="secondary">Save Draft</Button>
                <Button variant="primary">Submit Form</Button>
              </div>
            </div>

            {/* Card Actions */}
            <div className="bg-gradient-to-br from-background to-background-secondary p-6 rounded-xl border border-border">
              <h6 className="text-sm font-medium text-text mb-4">
                Card Actions
              </h6>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  icon="left"
                  iconElement={<Heart className="w-4 h-4" />}
                >
                  Like
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  icon="left"
                  iconElement={<Share2 className="w-4 h-4" />}
                >
                  Share
                </Button>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </div>
            </div>

            {/* Alert Actions */}
            <div className="bg-gradient-to-br from-background to-background-secondary p-6 rounded-xl border border-border">
              <h6 className="text-sm font-medium text-text mb-4">
                Alert Actions
              </h6>
              <div className="flex items-center gap-3 p-4 bg-yellow/10 border border-yellow/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-text">
                    This action cannot be undone
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon="left"
                    iconElement={<X className="w-4 h-4" />}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" size="sm">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Implementation Guide */}
        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <h5 className="heading-4 text-text">Implementation Guide</h5>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="bg-material-medium rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-text leading-relaxed">
              <code>
                <div>
                  <span className="text-gray italic">// Semantic variants</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> variant</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"primary"</span>
                  <span className="text-blue">&gt;</span>
                  Primary Action
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> variant</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"secondary"</span>
                  <span className="text-blue">&gt;</span>
                  Secondary Action
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> variant</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"outline"</span>
                  <span className="text-blue">&gt;</span>
                  Outlined Button
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> variant</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"ghost"</span>
                  <span className="text-blue">&gt;</span>
                  Ghost Button
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> variant</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"destructive"</span>
                  <span className="text-blue">&gt;</span>
                  Delete Action
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n\n'}
                  <span className="text-gray-500 italic">// With icons</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  {'\n  '}
                  <span className="text-purple">variant</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"primary"</span>
                  {'\n  '}
                  <span className="text-purple">icon</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">"left"</span>
                  {'\n  '}
                  <span className="text-purple">iconElement</span>
                  <span className="text-blue">={'{'}</span>
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Plus</span>
                  <span className="text-blue"> /&gt;</span>
                  <span className="text-blue">{'}'}</span>
                  {'\n'}
                  <span className="text-blue">&gt;</span>
                  {'\n  '}
                  Add Item
                  {'\n'}
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n\n'}
                  <span className="text-gray-500 italic">// With states</span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> loading</span>
                  <span className="text-blue">={'{'}</span>
                  <span className="text-red">isLoading</span>
                  <span className="text-blue">{'}'}</span>
                  <span className="text-purple"> disabled</span>
                  <span className="text-blue">={'{'}</span>
                  <span className="text-red">isDisabled</span>
                  <span className="text-blue">{'}'}</span>
                  <span className="text-blue">&gt;</span>
                  {'\n  '}
                  Submit
                  {'\n'}
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                  {'\n\n'}
                  <span className="text-gray-500 italic">
                    // Direct color access
                  </span>
                  {'\n'}
                  <span className="text-blue">&lt;</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-purple"> className</span>
                  <span className="text-blue">=</span>
                  <span className="text-emerald">
                    "bg-pink text-white hover:opacity-90"
                  </span>
                  <span className="text-blue">&gt;</span>
                  {'\n  '}
                  Pink Button
                  {'\n'}
                  <span className="text-blue">&lt;/</span>
                  <span className="text-blue font-semibold">Button</span>
                  <span className="text-blue">&gt;</span>
                </div>
              </code>
            </pre>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
