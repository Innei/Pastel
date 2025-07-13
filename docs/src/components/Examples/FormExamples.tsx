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
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="input"
                />
              </div>

              <div className="space-y-2">
                <label className="label">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input"
                />
              </div>

              <div className="space-y-2">
                <label className="label">Favorite Color</label>
                <select className="input">
                  <option>Choose your favorite...</option>
                  <option>Pink</option>
                  <option>Blue</option>
                  <option>Purple</option>
                  <option>Green</option>
                  <option>Orange</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="label">Message</label>
                <textarea
                  placeholder="Tell us something..."
                  rows={4}
                  className="input resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="label">Preferences</label>
                <div className="space-y-2">
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
            <div className="space-y-3">
              <label className="label">Choose your plan</label>
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
              <div className="space-y-4">
                <label className="label">Volume</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="75"
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="space-y-4">
                <label className="label">Brightness</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted">
                  <span>Dark</span>
                  <span>Bright</span>
                </div>
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
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
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
            <button className="btn btn-primary px-8 py-4 font-medium">
              Submit
            </button>
            <button className="btn btn-secondary px-6 py-4 font-medium">
              Reset Form
            </button>
            <button className="btn btn-secondary px-6 py-4 font-medium">
              Save Draft
            </button>
          </div>
        </div>

        {/* Validation States */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Validation States</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="label">Valid Input</label>
              <input
                type="text"
                value="Valid input"
                className="input border-green focus:border-green"
                readOnly
              />
              <p className="text-xs text-green flex items-center gap-1">
                Looks great!
              </p>
            </div>

            <div className="space-y-2">
              <label className="label">Warning Input</label>
              <input
                type="text"
                value="Warning"
                className="input border-yellow focus:border-yellow"
                readOnly
              />
              <p className="text-xs text-yellow flex items-center gap-1">
                This might need attention
              </p>
            </div>

            <div className="space-y-2">
              <label className="label">Error Input</label>
              <input
                type="text"
                value="Error"
                className="input border-red focus:border-red"
                readOnly
              />
              <p className="text-xs text-red flex items-center gap-1">
                Please fix this field
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
