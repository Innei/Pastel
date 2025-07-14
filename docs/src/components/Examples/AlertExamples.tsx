export function AlertExamples() {
  return (
    <div className="card p-8 space-y-8">
      <div className="text-center">
        <h4 className="heading-3 text-foreground mb-2">Alert Gallery</h4>
        <p className="text-muted">Clean alerts that inform users effectively</p>
      </div>

      <div className="space-y-8">
        {/* Success Alerts */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Success Alerts</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-md p-6 bg-green/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-green">✓</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">Success!</h6>
                  <p className="text-sm text-muted">
                    Your profile has been saved successfully!
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-md p-6 bg-green/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-green">✓</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">
                    Congratulations!
                  </h6>
                  <p className="text-sm text-muted">
                    You've unlocked a new theme!
                  </p>
                </div>
                <button className="px-3 py-1 bg-green hover:opacity-90 text-white rounded-md text-sm transition-opacity">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Alerts */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Info Alerts</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-md p-6 bg-blue/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-blue">i</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">
                    Did you know?
                  </h6>
                  <p className="text-sm text-muted">
                    Our color system supports P3 wide color gamut!
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-md p-6 bg-blue/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-blue">i</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">Pro Tip</h6>
                  <p className="text-sm text-muted">
                    Use OKLCH for more perceptually uniform colors!
                  </p>
                </div>
                <button className="px-3 py-1 bg-blue hover:opacity-90 text-white rounded-md text-sm transition-opacity">
                  Learn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Alerts */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Warning Alerts</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-md p-6 bg-yellow/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-yellow">!</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">Heads up!</h6>
                  <p className="text-sm text-muted">
                    Your theme will expire in 3 days.
                  </p>
                </div>
                <button className="px-3 py-1 bg-yellow hover:opacity-90 text-white rounded-md text-sm transition-opacity">
                  Renew
                </button>
              </div>
            </div>

            <div className="border border-orange/20 rounded-md p-6 bg-orange/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-orange">!</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">Maintenance</h6>
                  <p className="text-sm text-muted">
                    Servers will be down for 30 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Alerts */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Error Alerts</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red/20 rounded-md p-6 bg-red/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-red">✕</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">Oops!</h6>
                  <p className="text-sm text-muted">
                    Something went wrong with your request.
                  </p>
                </div>
                <button className="px-3 py-1 bg-red hover:opacity-90 text-white rounded-md text-sm transition-opacity">
                  Retry
                </button>
              </div>
            </div>

            <div className="border border-red/20 rounded-md p-6 bg-red/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-red">✕</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">
                    Critical Error
                  </h6>
                  <p className="text-sm text-muted">
                    Unable to load color palette.
                  </p>
                </div>
                <button className="px-3 py-1 bg-red hover:opacity-90 text-white rounded-md text-sm transition-opacity">
                  Fix
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Alerts */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Interactive Alerts</h5>
          <div className="space-y-4">
            <div className="border border-purple/20 rounded-md p-6 bg-purple/10">
              <div className="flex items-center gap-4">
                <div className="text-2xl text-purple">★</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">
                    Special Offer!
                  </h6>
                  <p className="text-sm text-muted">
                    Get 50% off on premium themes. Limited time offer!
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-purple hover:opacity-90 text-white rounded-md transition-opacity">
                    Claim
                  </button>
                  <button className="px-4 py-2 border border-purple/30 text-purple hover:bg-purple/10 rounded-md transition-colors">
                    Later
                  </button>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4">
                <div className="text-2xl">★</div>
                <div className="flex-1">
                  <h6 className="font-semibold text-foreground">
                    Rate our colors!
                  </h6>
                  <p className="text-sm text-muted">
                    Help us improve by sharing your feedback.
                  </p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-2xl text-muted hover:text-yellow transition-colors"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast-style Alerts */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Toast Alerts</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="text-xl text-pink">✓</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Saved!</p>
                </div>
                <button className="text-muted hover:text-foreground transition-colors">
                  <span className="text-sm">✕</span>
                </button>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="text-xl text-blue">✓</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Message sent!
                  </p>
                </div>
                <button className="text-muted hover:text-foreground transition-colors">
                  <span className="text-sm">✕</span>
                </button>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="text-xl text-green">✓</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    Achievement unlocked!
                  </p>
                </div>
                <button className="text-muted hover:text-foreground transition-colors">
                  <span className="text-sm">✕</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Badges */}
        <div className="space-y-4">
          <h5 className="heading-4 text-foreground">Notification Badges</h5>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="relative">
              <button className="btn btn-primary">Messages</button>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red text-white text-xs rounded-full flex items-center justify-center font-medium">
                3
              </div>
            </div>

            <div className="relative">
              <button className="btn btn-primary">Notifications</button>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue text-white text-xs rounded-full flex items-center justify-center font-medium">
                7
              </div>
            </div>

            <div className="relative">
              <button className="btn btn-primary">Rewards</button>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green text-white text-xs rounded-full flex items-center justify-center font-medium">
                !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
