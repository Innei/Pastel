import { AlertCircle, Check, CloudUpload, X } from 'lucide-react'

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
  return (
    <div className="card p-8 space-y-8">
      <div className="text-center">
        <h4 className="heading-3 text-foreground mb-2">Form Elements</h4>
        <p className="text-muted">Clean forms that users will enjoy</p>
      </div>

      <div className="space-y-8">
        {/* Basic Form Elements */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Basic Elements</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex gap-3 flex-col">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" placeholder="Enter your name..." />
              </div>

              <div className="flex gap-3 flex-col">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="flex gap-3 flex-col">
                <Label htmlFor="color">Favorite Color</Label>
                <Select>
                  <SelectTrigger id="color">
                    <SelectValue placeholder="Choose your favorite..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-3 flex-col">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us something..."
                  rows={4}
                />
              </div>

              <div className="flex gap-3 flex-col">
                <Label>Preferences</Label>
                <div className="flex gap-1 flex-col">
                  <label className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded focus:ring-0 accent-accent"
                    />
                    <span className="text-sm text-foreground">
                      Enable notifications
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded focus:ring-0 accent-accent"
                    />
                    <span className="text-sm text-foreground">Dark mode</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-muted">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded focus:ring-0 accent-accent"
                    />
                    <span className="text-sm text-foreground">
                      Weekly updates
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Radio Buttons</h5>
          <div className="card p-6">
            <div className="flex gap-3 flex-col">
              <Label>Choose your plan</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <label className="card p-4 cursor-pointer hover:border-foreground transition-colors text-center">
                  <input type="radio" name="plan" className="sr-only" />
                  <div className="text-sm font-medium">Free</div>
                  <div className="text-xs text-muted">$0/month</div>
                </label>
                <label className="card p-4 cursor-pointer hover:border-foreground transition-colors text-center">
                  <input type="radio" name="plan" className="sr-only" />
                  <div className="text-sm font-medium">Pro</div>
                  <div className="text-xs text-muted">$10/month</div>
                </label>
                <label className="card p-4 cursor-pointer hover:border-foreground transition-colors text-center">
                  <input type="radio" name="plan" className="sr-only" />
                  <div className="text-sm font-medium">Team</div>
                  <div className="text-xs text-muted">$25/month</div>
                </label>
                <label className="card p-4 cursor-pointer hover:border-foreground transition-colors text-center">
                  <input type="radio" name="plan" className="sr-only" />
                  <div className="text-sm font-medium">Enterprise</div>
                  <div className="text-xs text-muted">Custom</div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Range Sliders */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Range Sliders</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex gap-6 flex-col">
                <Label htmlFor="volume">Volume</Label>
                <Slider
                  defaultValue={[75]}
                  max={100}
                  step={1}
                  className="w-full"
                  showValue
                  valueFormatter={(value) => `${value}%`}
                  id="volume"
                />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex gap-6 flex-col">
                <Label htmlFor="brightness">Brightness</Label>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-full"
                  showValue
                  valueFormatter={(value) => `${value}%`}
                  id="brightness"
                />
              </div>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">File Upload</h5>
          <div className="border-2 border-dashed border-border rounded-md p-8 hover:border-border/50 transition-colors cursor-pointer text-center">
            <div className="space-y-4">
              <div className="text-muted">
                <CloudUpload className="w-12 h-12 mx-auto" />
              </div>
              <div>
                <h6 className="text-lg font-semibold text-foreground">
                  Upload your files
                </h6>
                <p className="text-muted">Drag and drop or click to select</p>
              </div>
              <button className="btn btn-primary">Choose Files</button>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Form Actions</h5>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-primary px-8 py-2 font-medium">
              Submit
            </button>
            <button className="btn btn-secondary px-6 py-2 font-medium">
              Reset Form
            </button>
            <button className="btn btn-secondary px-6 py-2 font-medium">
              Save Draft
            </button>
          </div>
        </div>

        {/* Validation States */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Validation States</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="valid-input">Valid Input</Label>
              <Input
                id="valid-input"
                type="text"
                value="Valid input"
                className="border-green focus:border-green focus:ring-green"
                readOnly
              />
              <p className="text-xs text-green flex items-center gap-1 mt-2">
                <Check className="w-3 h-3" />
                Looks great!
              </p>
            </div>

            <div>
              <Label htmlFor="warning-input">Warning Input</Label>
              <Input
                id="warning-input"
                type="text"
                value="Warning"
                className="border-yellow focus:border-yellow focus:ring-yellow"
                readOnly
              />
              <p className="text-xs text-yellow flex items-center gap-1 mt-2">
                <AlertCircle className="w-3 h-3" />
                This might need attention
              </p>
            </div>

            <div>
              <Label htmlFor="error-input">Error Input</Label>
              <Input
                id="error-input"
                type="text"
                value="Error"
                className="border-red focus:border-red focus:ring-red"
                readOnly
              />
              <p className="text-xs text-red flex items-center gap-1 mt-2">
                <X className="w-3 h-3" />
                Please fix this field
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
