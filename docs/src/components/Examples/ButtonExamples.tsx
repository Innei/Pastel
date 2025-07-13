export default function ButtonExamples() {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Buttons</h4>
      
      <div className="space-y-6">
        <div>
          <h5 className="text-sm font-medium text-text-secondary mb-3">Primary Colors</h5>
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue hover:bg-blue-dark dark:bg-blue-dark dark:hover:bg-blue
                           text-white px-4 py-2 rounded-lg transition-colors">
              Blue Button
            </button>
            <button className="bg-pink hover:bg-pink-dark dark:bg-pink-dark dark:hover:bg-pink
                           text-white px-4 py-2 rounded-lg transition-colors">
              Pink Button
            </button>
            <button className="bg-purple hover:bg-purple-dark dark:bg-purple-dark dark:hover:bg-purple
                           text-white px-4 py-2 rounded-lg transition-colors">
              Purple Button
            </button>
            <button className="bg-green hover:bg-green-dark dark:bg-green-dark dark:hover:bg-green
                           text-white px-4 py-2 rounded-lg transition-colors">
              Green Button
            </button>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-text-secondary mb-3">Warm Colors</h5>
          <div className="flex flex-wrap gap-3">
            <button className="bg-orange hover:bg-orange-dark dark:bg-orange-dark dark:hover:bg-orange
                           text-white px-4 py-2 rounded-lg transition-colors">
              Orange Button
            </button>
            <button className="bg-yellow hover:bg-yellow-dark dark:bg-yellow-dark dark:hover:bg-yellow
                           text-white px-4 py-2 rounded-lg transition-colors">
              Yellow Button
            </button>
            <button className="bg-red hover:bg-red-dark dark:bg-red-dark dark:hover:bg-red
                           text-white px-4 py-2 rounded-lg transition-colors">
              Red Button
            </button>
            <button className="bg-brown hover:bg-brown-dark dark:bg-brown-dark dark:hover:bg-brown
                           text-white px-4 py-2 rounded-lg transition-colors">
              Brown Button
            </button>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-text-secondary mb-3">Ghost Variants</h5>
          <div className="flex flex-wrap gap-3">
            <button className="border border-blue text-blue hover:bg-blue/10 
                           px-4 py-2 rounded-lg transition-colors">
              Blue Ghost
            </button>
            <button className="border border-pink text-pink hover:bg-pink/10 
                           px-4 py-2 rounded-lg transition-colors">
              Pink Ghost
            </button>
            <button className="border border-purple text-purple hover:bg-purple/10 
                           px-4 py-2 rounded-lg transition-colors">
              Purple Ghost
            </button>
            <button className="border border-green text-green hover:bg-green/10 
                           px-4 py-2 rounded-lg transition-colors">
              Green Ghost
            </button>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-medium text-text-secondary mb-3">Semantic Variants</h5>
          <div className="flex flex-wrap gap-3">
            <button className="bg-primary hover:bg-primary-dark text-white 
                           px-4 py-2 rounded-lg transition-colors">
              Primary Action
            </button>
            <button className="bg-secondary hover:bg-secondary-dark text-white 
                           px-4 py-2 rounded-lg transition-colors">
              Secondary Action
            </button>
            <button className="bg-accent hover:bg-accent-dark text-white 
                           px-4 py-2 rounded-lg transition-colors">
              Accent Action
            </button>
            <button className="border border-border text-text hover:bg-element 
                           px-4 py-2 rounded-lg transition-colors">
              Default Action
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}