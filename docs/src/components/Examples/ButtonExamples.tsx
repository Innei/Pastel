export function ButtonExamples() {
  return (
    <div className="card p-8 space-y-8">
      <div className="text-center">
        <h4 className="heading-4 mb-2">Button Examples</h4>
        <p className="text-muted">
          Explore different button styles using our color system
        </p>
      </div>

      <div className="space-y-8">
        {/* Primary Buttons */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Primary Buttons</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="btn bg-primary text-white hover:opacity-90">
              Primary
            </button>
            <button className="btn bg-pink text-white hover:opacity-90">
              Pink
            </button>
            <button className="btn bg-purple text-white hover:opacity-90">
              Purple
            </button>
            <button className="btn bg-green text-white hover:opacity-90">
              Green
            </button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Secondary Buttons</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="btn btn-secondary">
              Default
            </button>
            <button className="btn border border-blue text-blue hover:bg-blue hover:bg-opacity-10">
              Blue
            </button>
            <button className="btn border border-green text-green hover:bg-green hover:bg-opacity-10">
              Green
            </button>
            <button className="btn border border-red text-red hover:bg-red hover:bg-opacity-10">
              Red
            </button>
          </div>
        </div>

        {/* Pastel Buttons */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Pastel Variants</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="btn bg-sky-light text-sky-dark hover:bg-sky hover:text-white">
              Sky
            </button>
            <button className="btn bg-pink-light text-pink-dark hover:bg-pink hover:text-white">
              Pink
            </button>
            <button className="btn bg-yellow-light text-yellow-dark hover:bg-yellow hover:text-white">
              Yellow
            </button>
            <button className="btn bg-purple-light text-purple-dark hover:bg-purple hover:text-white">
              Purple
            </button>
          </div>
        </div>

        {/* Button Sizes */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Button Sizes</h5>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn btn-primary text-sm py-1.5 px-3">
              Small
            </button>
            <button className="btn btn-primary">
              Medium
            </button>
            <button className="btn btn-primary text-lg py-3 px-6">
              Large
            </button>
          </div>
        </div>

        {/* Button States */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Button States</h5>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">
              Normal
            </button>
            <button className="btn btn-secondary" disabled>
              Disabled
            </button>
            <button className="btn btn-primary flex items-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading
            </button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Icon Buttons</h5>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Item
            </button>
            <button className="btn btn-secondary flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Like
            </button>
            <button className="btn btn-secondary flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>

        {/* Usage Example */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold">Usage Example</h5>
          <div className="bg-muted p-6 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`<button className="btn btn-primary">
  Primary Button
</button>

<button className="btn bg-pink text-white hover:opacity-90">
  Pink Button
</button>

<button className="btn btn-secondary">
  Secondary Button
</button>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}