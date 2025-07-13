export default function AlertExamples() {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Alerts & Notifications</h4>
      
      <div className="space-y-4">
        <div className="bg-blue/10 border border-blue text-blue rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h5 className="font-medium mb-1">Information</h5>
            <p className="text-sm opacity-90">This is an informational alert using blue colors.</p>
          </div>
        </div>

        <div className="bg-green/10 border border-green text-green rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <h5 className="font-medium mb-1">Success</h5>
            <p className="text-sm opacity-90">Your changes have been saved successfully!</p>
          </div>
        </div>

        <div className="bg-yellow/10 border border-yellow text-yellow rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h5 className="font-medium mb-1">Warning</h5>
            <p className="text-sm opacity-90">Please review your input before proceeding.</p>
          </div>
        </div>

        <div className="bg-red/10 border border-red text-red rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <h5 className="font-medium mb-1">Error</h5>
            <p className="text-sm opacity-90">Something went wrong. Please try again.</p>
          </div>
        </div>

        <div className="bg-purple/10 border border-purple text-purple rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <div>
            <h5 className="font-medium mb-1">Tip</h5>
            <p className="text-sm opacity-90">Pro tip: You can use keyboard shortcuts for faster navigation.</p>
          </div>
        </div>

        <div className="mt-8">
          <h5 className="text-sm font-medium text-text-secondary mb-3">Toast Notifications</h5>
          <div className="flex flex-wrap gap-3">
            <div className="bg-material-thick backdrop-blur-xl border border-white/10 rounded-lg px-4 py-3 shadow-lg">
              <p className="text-sm font-medium text-text">Default notification</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink to-purple text-white rounded-lg px-4 py-3 shadow-lg">
              <p className="text-sm font-medium">Gradient notification</p>
            </div>
            
            <div className="bg-black text-white rounded-lg px-4 py-3 shadow-lg">
              <p className="text-sm font-medium">Dark notification</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h5 className="text-sm font-medium text-text-secondary mb-3">Inline Messages</h5>
          <div className="space-y-3">
            <div className="bg-fill rounded-md px-3 py-2">
              <p className="text-sm text-text-secondary">This is a subtle inline message.</p>
            </div>
            
            <div className="bg-accent/20 text-accent rounded-md px-3 py-2">
              <p className="text-sm font-medium">This is an accent inline message.</p>
            </div>
            
            <div className="border-l-4 border-primary bg-primary/5 px-4 py-3">
              <p className="text-sm text-text">This is a bordered inline message with emphasis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}