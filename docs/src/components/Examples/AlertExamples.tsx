import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle,
  Clock,
  Gift,
  Heart,
  Info,
  MessageSquare,
  RefreshCw,
  Star,
  X,
  XCircle,
  Zap,
} from 'lucide-react'
import { AnimatePresence, m } from 'motion/react'
import { useState } from 'react'

import { microReboundPreset, softSpringPreset } from '../../constants/spring'

interface AlertProps {
  variant: 'success' | 'info' | 'warning' | 'error'
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary'
  }
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

function Alert({
  variant,
  title,
  description,
  action,
  dismissible = false,
  onDismiss,
  className = '',
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  const variants = {
    success: {
      icon: CheckCircle,
      iconColor: 'text-green',
      bgColor: 'bg-green/5',
      borderColor: 'border-green/20',
      ringColor: 'ring-green/10',
    },
    info: {
      icon: Info,
      iconColor: 'text-blue',
      bgColor: 'bg-blue/5',
      borderColor: 'border-blue/20',
      ringColor: 'ring-blue/10',
    },
    warning: {
      icon: AlertTriangle,
      iconColor: 'text-yellow',
      bgColor: 'bg-yellow/5',
      borderColor: 'border-yellow/20',
      ringColor: 'ring-yellow/10',
    },
    error: {
      icon: XCircle,
      iconColor: 'text-red',
      bgColor: 'bg-red/5',
      borderColor: 'border-red/20',
      ringColor: 'ring-red/10',
    },
  }

  const config = variants[variant]
  const IconComponent = config.icon

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <m.div
      role="alert"
      aria-live="polite"
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={softSpringPreset}
      className={`
        relative overflow-hidden rounded-lg border shadow-sm
        ${config.bgColor} ${config.borderColor} ${config.ringColor}
        ${className}
      `}
    >
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className={`flex-shrink-0 ${config.iconColor}`}>
            <IconComponent className="w-5 h-5" aria-hidden="true" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text mb-1">{title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {description}
            </p>

            {action && (
              <div className="mt-3">
                <m.button
                  type="button"
                  onClick={action.onClick}
                  className={`
                    inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${
                      action.variant === 'primary'
                        ? `${
                            variant === 'success'
                              ? 'bg-green hover:bg-green/90 focus:ring-green'
                              : variant === 'info'
                              ? 'bg-blue hover:bg-blue/90 focus:ring-blue'
                              : variant === 'warning'
                              ? 'bg-yellow hover:bg-yellow/90 focus:ring-yellow'
                              : 'bg-red hover:bg-red/90 focus:ring-red'
                          } text-white`
                        : `border ${config.borderColor} ${config.iconColor} hover:${config.bgColor} focus:${config.ringColor}`
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={microReboundPreset}
                >
                  {action.label}
                </m.button>
              </div>
            )}
          </div>

          {dismissible && (
            <m.button
              type="button"
              onClick={handleDismiss}
              className="flex-shrink-0 p-1.5 text-text-tertiary hover:text-text-secondary rounded-md hover:bg-background-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-border"
              aria-label="Dismiss alert"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={microReboundPreset}
            >
              <X className="w-4 h-4" />
            </m.button>
          )}
        </div>
      </div>
    </m.div>
  )
}

interface ToastProps {
  icon: React.ComponentType<{ className?: string }>
  message: string
  variant?: 'success' | 'info' | 'warning' | 'error'
  onDismiss?: () => void
}

function Toast({
  icon: IconComponent,
  message,
  variant = 'success',
  onDismiss,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  const colors = {
    success: 'text-green',
    info: 'text-blue',
    warning: 'text-yellow',
    error: 'text-red',
  }

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <m.div
      initial={{ opacity: 0, x: 300, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.9 }}
      transition={softSpringPreset}
      className="bg-background border border-border rounded-lg shadow-lg p-3 min-w-[200px]"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <IconComponent className={`w-4 h-4 flex-shrink-0 ${colors[variant]}`} />
        <p className="text-sm font-medium text-text flex-1">{message}</p>
        <m.button
          type="button"
          onClick={handleDismiss}
          className="text-text-tertiary hover:text-text-secondary p-0.5 rounded transition-colors"
          aria-label="Dismiss notification"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={microReboundPreset}
        >
          <X className="w-3.5 h-3.5" />
        </m.button>
      </div>
    </m.div>
  )
}

interface NotificationBadgeProps {
  children: React.ReactNode
  count: number | string
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  max?: number
}

function NotificationBadge({
  children,
  count,
  variant = 'primary',
  max = 99,
}: NotificationBadgeProps) {
  const displayCount =
    typeof count === 'number' && count > max ? `${max}+` : count

  const colors = {
    primary: 'bg-blue text-white',
    secondary: 'bg-neutral text-white',
    success: 'bg-green text-white',
    warning: 'bg-yellow text-white',
    error: 'bg-red text-white',
  }

  return (
    <div className="relative inline-block">
      {children}
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`
          absolute -top-2 -right-2 min-w-[20px] h-5 px-1 
          flex items-center justify-center text-xs font-semibold 
          rounded-full ${colors[variant]}
        `}
        aria-label={`${count} notifications`}
      >
        {displayCount}
      </m.div>
    </div>
  )
}

interface StarRatingProps {
  rating: number
  onRatingChange?: (rating: number) => void
  readonly?: boolean
}

function StarRating({
  rating,
  onRatingChange,
  readonly = false,
}: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(0)

  return (
    <div className="flex gap-1" role="group" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <m.button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => !readonly && onRatingChange?.(star)}
          onMouseEnter={() => !readonly && setHoveredStar(star)}
          onMouseLeave={() => !readonly && setHoveredStar(0)}
          className={`
            p-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 rounded
            ${readonly ? 'cursor-default' : 'cursor-pointer'}
            ${
              star <= (hoveredStar || rating)
                ? 'text-yellow'
                : 'text-text-tertiary'
            }
            ${!readonly && 'hover:scale-110'}
            transition-colors
          `}
          aria-label={`${star} star${star !== 1 ? 's' : ''}`}
          whileHover={!readonly ? { scale: 1.1 } : {}}
          whileTap={!readonly ? { scale: 0.95 } : {}}
          transition={microReboundPreset}
        >
          <Star
            className="w-5 h-5"
            fill={star <= (hoveredStar || rating) ? 'currentColor' : 'none'}
          />
        </m.button>
      ))}
    </div>
  )
}

export function AlertExamples() {
  const [starRating, setStarRating] = useState(0)

  return (
    <div className="card p-6 lg:p-8 space-y-12">
      {/* Header Section */}
      <header className="text-center space-y-3">
        <h2 className="text-2xl lg:text-3xl font-bold text-text">
          Alert System Showcase
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          A comprehensive collection of notification patterns that provide clear
          feedback and guide user interactions with semantic colors and
          meaningful animations.
        </p>
      </header>

      <div className="space-y-12">
        {/* Standard Alerts */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text">Standard Alerts</h3>
            <p className="text-text-secondary">
              Essential feedback messages for user actions and system states
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Alert
              variant="success"
              title="Profile Updated"
              description="Your profile information has been saved successfully. All changes are now live."
              action={{
                label: 'View Profile',
                onClick: () => console.info('View profile'),
                variant: 'primary',
              }}
              dismissible
            />

            <Alert
              variant="info"
              title="Feature Update Available"
              description="We've added support for P3 wide color gamut in our latest release."
              action={{
                label: 'Learn More',
                onClick: () => console.info('Learn more'),
                variant: 'secondary',
              }}
              dismissible
            />

            <Alert
              variant="warning"
              title="Storage Limit Approaching"
              description="You've used 85% of your storage quota. Consider upgrading your plan."
              action={{
                label: 'Upgrade Plan',
                onClick: () => console.info('Upgrade'),
                variant: 'primary',
              }}
              dismissible
            />

            <Alert
              variant="error"
              title="Connection Failed"
              description="Unable to establish connection to the server. Please check your internet connection."
              action={{
                label: 'Retry Connection',
                onClick: () => console.info('Retry'),
                variant: 'primary',
              }}
              dismissible
            />
          </div>
        </section>

        {/* Interactive Alerts */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text">
              Interactive Components
            </h3>
            <p className="text-text-secondary">
              Engaging alerts that require user input or provide rich
              interactions
            </p>
          </div>

          <div className="space-y-4">
            {/* Special Offer Alert */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={softSpringPreset}
              className="relative overflow-hidden rounded-lg border border-purple/20 bg-gradient-to-r from-purple/5 to-pink/5 shadow-sm"
              role="banner"
              aria-label="Special offer"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
                      <Gift className="w-6 h-6 text-purple" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text mb-1">
                      Limited Time Offer!
                    </h3>
                    <p className="text-text-secondary">
                      Get 50% off premium themes and unlock advanced color
                      tools. Offer expires in 3 days.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <m.button
                      className="px-4 py-2 bg-purple text-white rounded-lg font-medium hover:bg-purple/90 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={microReboundPreset}
                    >
                      Claim Offer
                    </m.button>
                    <m.button
                      className="px-4 py-2 border border-purple/30 text-purple rounded-lg font-medium hover:bg-purple/5 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={microReboundPreset}
                    >
                      Remind Later
                    </m.button>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Rating Alert */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...softSpringPreset, delay: 0.1 }}
              className="bg-background border border-border rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-yellow" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text mb-1">
                    How are we doing?
                  </h3>
                  <p className="text-text-secondary mb-3">
                    Your feedback helps us improve our color system and user
                    experience.
                  </p>
                  <StarRating
                    rating={starRating}
                    onRatingChange={setStarRating}
                  />
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Toast Notifications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text">
              Toast Notifications
            </h3>
            <p className="text-text-secondary">
              Lightweight, temporary notifications that appear and auto-dismiss
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Toast
              icon={CheckCircle}
              message="Changes saved!"
              variant="success"
            />
            <Toast
              icon={MessageSquare}
              message="Message sent successfully"
              variant="info"
            />
            <Toast
              icon={Zap}
              message="Achievement unlocked!"
              variant="success"
            />
            <Toast
              icon={Clock}
              message="Backup in progress..."
              variant="info"
            />
            <Toast
              icon={AlertCircle}
              message="Please verify your email"
              variant="warning"
            />
            <Toast
              icon={RefreshCw}
              message="Sync completed"
              variant="success"
            />
          </div>
        </section>

        {/* Notification Badges */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text">
              Notification Badges
            </h3>
            <p className="text-text-secondary">
              Visual indicators that communicate status and pending actions
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <NotificationBadge count={3} variant="error">
              <m.button
                className="btn btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={microReboundPreset}
              >
                <MessageSquare className="w-4 h-4" />
                Messages
              </m.button>
            </NotificationBadge>

            <NotificationBadge count={12} variant="primary">
              <m.button
                className="btn btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={microReboundPreset}
              >
                <Bell className="w-4 h-4" />
                Notifications
              </m.button>
            </NotificationBadge>

            <NotificationBadge count="!" variant="success">
              <m.button
                className="btn btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={microReboundPreset}
              >
                <Gift className="w-4 h-4" />
                Rewards
              </m.button>
            </NotificationBadge>

            <NotificationBadge count={127} variant="warning" max={99}>
              <m.button
                className="btn btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={microReboundPreset}
              >
                <Star className="w-4 h-4" />
                Favorites
              </m.button>
            </NotificationBadge>
          </div>
        </section>

        {/* Status Indicators */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-text">
              Status Indicators
            </h3>
            <p className="text-text-secondary">
              Compact status messages for system health and user feedback
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                icon: CheckCircle,
                text: 'All systems operational',
                variant: 'success' as const,
              },
              {
                icon: Clock,
                text: 'Maintenance scheduled',
                variant: 'warning' as const,
              },
              {
                icon: Info,
                text: 'New features available',
                variant: 'info' as const,
              },
              {
                icon: AlertTriangle,
                text: 'Limited functionality',
                variant: 'error' as const,
              },
            ].map((status, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...softSpringPreset, delay: index * 0.05 }}
                className="bg-background-secondary border border-border rounded-lg p-3 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <status.icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      status.variant === 'success'
                        ? 'text-green'
                        : status.variant === 'warning'
                        ? 'text-yellow'
                        : status.variant === 'info'
                        ? 'text-blue'
                        : 'text-red'
                    }`}
                  />
                  <span className="text-sm font-medium text-text">
                    {status.text}
                  </span>
                </div>
              </m.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
