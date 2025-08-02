import { AlertCircle, Check, CloudUpload, Info, Star, X } from 'lucide-react'
import { m } from 'motion/react'
import { useState } from 'react'

import { microReboundPreset, softSpringPreset } from '../../constants/spring'
import { Checkbox } from '../ui/Checkbox'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/Select'
import { Slider } from '../ui/Slider'
import { Textarea } from '../ui/Textarea'

export function FormExamples() {
  const [selectedPlan, setSelectedPlan] = useState<string>('')

  const [isDragOver, setIsDragOver] = useState(false)

  const plans = [
    { id: 'free', name: 'Free', price: '$0/month', popular: false },
    { id: 'pro', name: 'Pro', price: '$10/month', popular: true },
    { id: 'team', name: 'Team', price: '$25/month', popular: false },
    { id: 'enterprise', name: 'Enterprise', price: 'Custom', popular: false },
  ]

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    // Handle file drop logic here
  }

  return (
    <div className="card p-8 space-y-12">
      {/* Header Section - Improved hierarchy */}
      <div className="text-center space-y-3">
        <h4 className="heading-3 text-foreground">Form Elements</h4>
        <p className="text-text-secondary text-base leading-relaxed max-w-2xl mx-auto">
          Clean, accessible forms designed for great user experiences
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-accent/50 to-accent mx-auto rounded-full" />
      </div>

      <div className="space-y-12">
        {/* Basic Form Elements - Enhanced layout and spacing */}
        <m.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={softSpringPreset}
        >
          <div className="flex items-center gap-3">
            <h5 className="heading-4 text-foreground">Basic Elements</h5>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 ml-3">
                  Your Name
                  <span className="text-red text-xs">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
                <p className="text-xs text-text-tertiary ml-3">
                  This will be displayed on your profile
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 ml-3">
                  Email Address
                  <span className="text-red text-xs">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="transition-all duration-200 focus:scale-[1.01]"
                />
                <p className="text-xs text-text-tertiary ml-3">
                  We'll never share your email
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color" className="ml-3">
                  Favorite Color
                </Label>
                <Select>
                  <SelectTrigger
                    id="color"
                    className="transition-all duration-200 hover:border-border-secondary !mt-1"
                  >
                    <SelectValue placeholder="Choose your favorite..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pink">🌸 Pink</SelectItem>
                    <SelectItem value="blue">💙 Blue</SelectItem>
                    <SelectItem value="purple">💜 Purple</SelectItem>
                    <SelectItem value="green">💚 Green</SelectItem>
                    <SelectItem value="orange">🧡 Orange</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-text-tertiary ml-3">
                  Help us personalize your experience
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="message" className="ml-3">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us something..."
                  rows={4}
                  className="transition-all duration-200 focus:scale-[1.01] resize-none !mt-1"
                />
                <div className="flex justify-between text-xs text-text-tertiary ml-3">
                  <span>Share your thoughts with us</span>
                  <span>0/500</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="ml-3">Preferences</Label>
                <div className="space-y-3">
                  {[
                    {
                      key: 'notifications' as const,
                      label: 'Enable notifications',
                      desc: 'Get notified about updates',
                    },
                    {
                      key: 'darkMode' as const,
                      label: 'Dark mode',
                      desc: 'Switch to dark theme',
                    },
                    {
                      key: 'weeklyUpdates' as const,
                      label: 'Weekly updates',
                      desc: 'Receive weekly newsletters',
                    },
                  ].map(({ key, label, desc }) => (
                    <Checkbox
                      key={key}
                      id={key}
                      description={desc}
                      size="md"
                      variant="accent"
                      className="p-3 rounded-lg hover:bg-background-secondary transition-all duration-200"
                    >
                      {label}
                    </Checkbox>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </m.div>

        {/* Radio Buttons - Enhanced with better visual feedback */}
        <m.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <h5 className="heading-4 text-foreground">Plan Selection</h5>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="card p-6 bg-gradient-to-br from-background to-background-secondary">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <Label className="text-base font-semibold">
                  Choose your plan
                </Label>
                <Info className="w-4 h-4 text-text-tertiary" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {plans.map((plan) => (
                  <m.label
                    key={plan.id}
                    className={`relative card p-5 cursor-pointer text-center transition-all duration-200 ${
                      selectedPlan === plan.id
                        ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                        : 'hover:border-border-secondary hover:shadow-md'
                    }`}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={microReboundPreset}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="sr-only"
                    />

                    {plan.popular && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-accent text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground">
                        {plan.name}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {plan.price}
                      </div>
                    </div>

                    {selectedPlan === plan.id && (
                      <m.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={microReboundPreset}
                        className="absolute bottom-2 right-2"
                      >
                        <Check className="w-4 h-4 text-accent" />
                      </m.div>
                    )}
                  </m.label>
                ))}
              </div>
            </div>
          </div>
        </m.div>

        {/* Range Sliders - Enhanced with better labels and feedback */}
        <m.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <h5 className="heading-4 text-foreground">Range Controls</h5>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="volume" className="text-sm font-medium">
                  Volume
                </Label>
                <span className="text-xs text-text-tertiary">Audio level</span>
              </div>
              <Slider
                defaultValue={[75]}
                max={100}
                step={1}
                className="w-full"
                showValue
                valueFormatter={(value) => `${value}%`}
                id="volume"
              />
              <div className="flex justify-between text-xs text-text-tertiary">
                <span>Quiet</span>
                <span>Loud</span>
              </div>
            </div>

            <div className="card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="brightness" className="text-sm font-medium">
                  Brightness
                </Label>
                <span className="text-xs text-text-tertiary">
                  Display level
                </span>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-full"
                showValue
                valueFormatter={(value) => `${value}%`}
                id="brightness"
              />
              <div className="flex justify-between text-xs text-text-tertiary">
                <span>Dark</span>
                <span>Bright</span>
              </div>
            </div>
          </div>
        </m.div>

        {/* File Upload - Enhanced with drag and drop feedback */}
        <m.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <h5 className="heading-4 text-foreground">File Upload</h5>
            <div className="flex-1 h-px bg-border" />
          </div>

          <m.div
            className={`border-2 border-dashed rounded-lg p-8 cursor-pointer text-center transition-all duration-200 ${
              isDragOver
                ? 'border-accent bg-accent/5 scale-[1.02]'
                : 'border-border hover:border-border-secondary hover:bg-background-secondary'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            whileHover={{ y: -2 }}
            transition={microReboundPreset}
          >
            <div className="space-y-4">
              <m.div
                className={`transition-colors duration-200 ${
                  isDragOver ? 'text-accent' : 'text-text-secondary'
                }`}
                animate={isDragOver ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <CloudUpload className="w-12 h-12 mx-auto" />
              </m.div>
              <div className="space-y-2">
                <h6 className="text-lg font-semibold text-foreground">
                  {isDragOver ? 'Drop your files here' : 'Upload your files'}
                </h6>
                <p className="text-text-secondary">
                  {isDragOver
                    ? 'Release to upload'
                    : 'Drag and drop or click to select files'}
                </p>
                <p className="text-xs text-text-tertiary">
                  Supports: JPG, PNG, PDF, DOC (Max: 10MB)
                </p>
              </div>
              {!isDragOver && (
                <m.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={microReboundPreset}
                >
                  Choose Files
                </m.button>
              )}
            </div>
          </m.div>
        </m.div>

        {/* Form Actions - Enhanced with better hierarchy */}
        <m.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <h5 className="heading-4 text-foreground">Form Actions</h5>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <m.button
              className="btn btn-primary px-8 py-3 font-medium text-base min-w-[120px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={microReboundPreset}
            >
              Submit Form
            </m.button>
            <div className="flex gap-3">
              <m.button
                className="btn btn-secondary px-6 py-2 font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={microReboundPreset}
              >
                Save Draft
              </m.button>
              <m.button
                className="btn btn-secondary px-6 py-2 font-medium text-text-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={microReboundPreset}
              >
                Reset Form
              </m.button>
            </div>
          </div>
        </m.div>

        {/* Validation States - Enhanced with better visual feedback */}
        <m.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <h5 className="heading-4 text-foreground">Validation States</h5>
            <div className="flex-1 h-px bg-border" />
          </div>

          <m.div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <m.div
              className="space-y-2"
              whileHover={{ y: -2 }}
              transition={microReboundPreset}
            >
              <Label
                htmlFor="valid-input"
                className="flex items-center gap-2 text-green"
              >
                <Check className="w-4 h-4" />
                Valid Input
              </Label>
              <Input
                id="valid-input"
                type="text"
                value="john.doe@example.com"
                className="border-green focus:border-green focus:ring-green bg-green/5"
                readOnly
              />
              <m.p
                className="text-xs text-green flex items-center gap-2 mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={microReboundPreset}
              >
                <Check className="w-3 h-3" />
                Perfect! This looks great.
              </m.p>
            </m.div>

            <m.div
              className="space-y-2"
              whileHover={{ y: -2 }}
              transition={microReboundPreset}
            >
              <Label
                htmlFor="warning-input"
                className="flex items-center gap-2 text-yellow"
              >
                <AlertCircle className="w-4 h-4" />
                Warning Input
              </Label>
              <Input
                id="warning-input"
                type="text"
                value="example@gmail"
                className="border-yellow focus:border-yellow focus:ring-yellow bg-yellow/5"
                readOnly
              />
              <m.p
                className="text-xs text-yellow flex items-center gap-2 mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...microReboundPreset, delay: 0.1 }}
              >
                <AlertCircle className="w-3 h-3" />
                This might need attention.
              </m.p>
            </m.div>

            <m.div
              className="space-y-2"
              whileHover={{ y: -2 }}
              transition={microReboundPreset}
            >
              <Label
                htmlFor="error-input"
                className="flex items-center gap-2 text-red"
              >
                <X className="w-4 h-4" />
                Error Input
              </Label>
              <Input
                id="error-input"
                type="text"
                value="invalid-email"
                className="border-red focus:border-red focus:ring-red bg-red/5"
                readOnly
              />
              <m.p
                className="text-xs text-red flex items-center gap-2 mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...microReboundPreset, delay: 0.2 }}
              >
                <X className="w-3 h-3" />
                Please enter a valid email address.
              </m.p>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </div>
  )
}
