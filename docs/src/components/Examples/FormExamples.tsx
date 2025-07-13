export default function FormExamples() {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Forms</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h5 className="text-sm font-medium text-text-secondary">Input Fields</h5>
          
          <div className="space-y-3">
            <div>
              <label htmlFor="text-input" className="block text-sm font-medium text-text mb-1">
                Text Input
              </label>
              <input
                type="text"
                id="text-input"
                placeholder="Enter some text..."
                className="w-full px-3 py-2 bg-background border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                         placeholder:text-placeholderText"
              />
            </div>

            <div>
              <label htmlFor="email-input" className="block text-sm font-medium text-text mb-1">
                Email Input with Validation
              </label>
              <input
                type="email"
                id="email-input"
                placeholder="email@example.com"
                className="w-full px-3 py-2 bg-background border border-pink rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent
                         placeholder:text-placeholderText"
              />
            </div>

            <div>
              <label htmlFor="disabled-input" className="block text-sm font-medium text-disabledText mb-1">
                Disabled Input
              </label>
              <input
                type="text"
                id="disabled-input"
                disabled
                placeholder="This is disabled"
                className="w-full px-3 py-2 bg-disabledControl border border-border rounded-lg
                         text-disabledText placeholder:text-disabledText cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="text-sm font-medium text-text-secondary">Select & Textarea</h5>
          
          <div className="space-y-3">
            <div>
              <label htmlFor="select-input" className="block text-sm font-medium text-text mb-1">
                Select Dropdown
              </label>
              <select
                id="select-input"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option>Choose an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="textarea-input" className="block text-sm font-medium text-text mb-1">
                Textarea
              </label>
              <textarea
                id="textarea-input"
                rows={3}
                placeholder="Enter your message..."
                className="w-full px-3 py-2 bg-background border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                         placeholder:text-placeholderText resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h5 className="text-sm font-medium text-text-secondary">Checkboxes & Radio Buttons</h5>
        
        <div className="flex flex-wrap gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary bg-background border-border rounded 
                         focus:ring-primary focus:ring-2"
              />
              <span className="text-sm text-text">Checkbox Option 1</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-primary bg-background border-border rounded 
                         focus:ring-primary focus:ring-2"
              />
              <span className="text-sm text-text">Checkbox Option 2</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                className="w-4 h-4 text-primary bg-background border-border 
                         focus:ring-primary focus:ring-2"
              />
              <span className="text-sm text-text">Radio Option 1</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                className="w-4 h-4 text-primary bg-background border-border 
                         focus:ring-primary focus:ring-2"
              />
              <span className="text-sm text-text">Radio Option 2</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h5 className="text-sm font-medium text-text-secondary mb-3">Complete Form Example</h5>
        <div className="bg-element rounded-xl p-6 max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 
                       rounded-lg transition-colors font-medium"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}