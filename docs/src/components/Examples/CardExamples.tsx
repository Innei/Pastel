import { m } from 'motion/react'

import { microReboundPreset, softSpringPreset } from '../../constants/spring'
import { cn } from '../../utils/cn'

export function CardExamples() {
  return (
    <div className="card p-8 lg:p-10 space-y-12">
      {/* Header with improved hierarchy */}
      <div className="text-center space-y-3">
        <m.h4 
          className="text-2xl font-bold text-foreground tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={softSpringPreset}
        >
          Card Gallery
        </m.h4>
        <m.p 
          className="text-text-secondary text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...softSpringPreset, delay: 0.1 }}
        >
          Clean cards for every need
        </m.p>
        <m.div 
          className="w-16 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ...softSpringPreset, delay: 0.2 }}
        />
      </div>

      <div className="space-y-16">
        {/* Basic Cards */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h5 className="text-xl font-semibold text-foreground">Basic Cards</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <m.div 
              className={cn(
                "card p-6 group cursor-pointer",
                "hover:shadow-lg hover:shadow-fill/5",
                "transition-all duration-300 ease-out",
                "focus-within:ring-2 focus-within:ring-accent/20 focus-within:ring-offset-2"
              )}
              whileHover={{ 
                y: -4,
                borderColor: "var(--color-border-secondary)"
              }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="Default card example"
            >
              <div className="text-center space-y-4">
                <div className="w-8 h-8 mx-auto bg-gradient-to-br from-fill to-fill-secondary rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Default Card
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  A simple card using semantic background and border colors
                </p>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "bg-pink border border-pink-dark rounded-lg p-6 group cursor-pointer",
                "hover:shadow-lg hover:shadow-pink/20",
                "transition-all duration-300 ease-out",
                "focus-within:ring-2 focus-within:ring-pink/30 focus-within:ring-offset-2"
              )}
              whileHover={{ 
                y: -4,
                scale: 1.02
              }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="Pink colored card example"
            >
              <div className="text-center space-y-4">
                <div className="w-8 h-8 mx-auto bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:scale-105 transition-transform">
                  Pink Card
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Vibrant pastel card with Pastel colors
                </p>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "card bg-background-secondary p-6 group cursor-pointer",
                "hover:shadow-lg hover:shadow-fill/5",
                "transition-all duration-300 ease-out",
                "focus-within:ring-2 focus-within:ring-accent/20 focus-within:ring-offset-2"
              )}
              whileHover={{ 
                y: -4,
                backgroundColor: "var(--color-background-tertiary)"
              }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="Background colored card example"
            >
              <div className="text-center space-y-4">
                <div className="w-8 h-8 mx-auto bg-fill rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Background Card
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Card with subtle background color
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* Interactive Cards */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-blue rounded-full" />
            <h5 className="text-xl font-semibold text-foreground">Interactive Cards</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <m.div 
              className={cn(
                "card p-6 cursor-pointer group relative overflow-hidden",
                "hover:shadow-xl hover:shadow-accent/10",
                "transition-all duration-300 ease-out",
                "focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:outline-none"
              )}
              whileHover={{ 
                y: -6,
                borderColor: "var(--color-accent)",
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
              }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="Hover effect card example"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-center space-y-4">
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Enhanced Hover
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Advanced hover effects with gradient overlay
                </p>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "card p-6 cursor-pointer group",
                "hover:shadow-lg hover:shadow-fill/10",
                "transition-all duration-300 ease-out",
                "focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:outline-none"
              )}
              whileHover={{ 
                y: -4,
                backgroundColor: "var(--color-background-secondary)"
              }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="Background hover card example"
            >
              <div className="text-center space-y-4">
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-fill to-fill-secondary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-4 h-4 bg-background rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Background Hover
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Background changes with icon rotation
                </p>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "card p-6 cursor-pointer group",
                "hover:shadow-2xl hover:shadow-green/15",
                "transition-all duration-300 ease-out",
                "focus:ring-2 focus:ring-green focus:ring-offset-2 focus:outline-none"
              )}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateY: 5
              }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="3D lift card example"
            >
              <div className="text-center space-y-4">
                <div className="w-10 h-10 mx-auto bg-gradient-to-br from-green to-green-dark rounded-xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-green transition-colors">
                  3D Lift Card
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Advanced 3D transform with perspective
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* Content Cards */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-purple rounded-full" />
            <h5 className="text-xl font-semibold text-foreground">Content Cards</h5>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <m.div 
              className={cn(
                "card p-8 group",
                "hover:shadow-lg hover:shadow-fill/5",
                "transition-all duration-300 ease-out"
              )}
              whileHover={{ y: -2 }}
              transition={microReboundPreset}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    Enhanced Card
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-base">
                  Clean card design that works perfectly for showcasing content
                  with a minimal aesthetic and improved visual hierarchy.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <m.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={microReboundPreset}
                  >
                    Learn More
                  </m.button>
                  <m.button 
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={microReboundPreset}
                  >
                    Get Started
                  </m.button>
                </div>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "card p-8 group",
                "hover:shadow-lg hover:shadow-fill/5",
                "transition-all duration-300 ease-out"
              )}
              whileHover={{ y: -2 }}
              transition={microReboundPreset}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple to-purple-dark rounded-full" />
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-purple transition-colors">
                    Consistent Design
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-base">
                  Consistent styling across all card components for a unified
                  design system with enhanced spacing and typography.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <m.button 
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={microReboundPreset}
                  >
                    Explore
                  </m.button>
                  <m.button 
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={microReboundPreset}
                  >
                    Try Now
                  </m.button>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Nested Cards */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-orange rounded-full" />
            <h5 className="text-xl font-semibold text-foreground">Nested Cards</h5>
          </div>
          <m.div 
            className={cn(
              "card bg-background-secondary border-2 border-border-secondary p-10",
              "hover:shadow-xl hover:shadow-fill/10",
              "transition-all duration-500 ease-out"
            )}
            whileHover={{ scale: 1.01 }}
            transition={softSpringPreset}
          >
            <div className="text-center mb-8 space-y-4">
              <div className="w-16 h-1 bg-gradient-to-r from-orange to-orange-dark rounded-full mx-auto" />
              <h3 className="text-2xl font-bold text-foreground">
                Parent Container
              </h3>
              <p className="text-text-secondary text-lg">
                Clean nested card hierarchy with enhanced depth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <m.div 
                className={cn(
                  "card bg-background p-6 group",
                  "hover:shadow-lg hover:shadow-fill/5",
                  "transition-all duration-300 ease-out"
                )}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={microReboundPreset}
              >
                <div className="text-center space-y-4">
                  <div className="w-8 h-8 mx-auto bg-gradient-to-br from-orange to-orange-dark rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-sm" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg group-hover:text-orange transition-colors">
                    Nested Card 1
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Using depth hierarchy for clean visual separation
                  </p>
                </div>
              </m.div>
              <m.div 
                className={cn(
                  "card bg-background p-6 group",
                  "hover:shadow-lg hover:shadow-fill/5",
                  "transition-all duration-300 ease-out"
                )}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={microReboundPreset}
              >
                <div className="text-center space-y-4">
                  <div className="w-8 h-8 mx-auto bg-gradient-to-br from-orange to-orange-dark rounded-lg flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white rounded-sm" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg group-hover:text-orange transition-colors">
                    Nested Card 2
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Perfect for organizing related content
                  </p>
                </div>
              </m.div>
            </div>
          </m.div>
        </section>

        {/* Feature Cards */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-green rounded-full" />
            <h5 className="text-xl font-semibold text-foreground">Feature Cards</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <m.div 
              className={cn(
                "card p-8 group cursor-pointer relative overflow-hidden",
                "hover:shadow-xl hover:shadow-pink/15",
                "transition-all duration-300 ease-out",
                "focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:outline-none"
              )}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="Color system feature"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-center space-y-6">
                <m.div 
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-pink to-pink-dark rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:shadow-xl group-hover:shadow-pink/20"
                  whileHover={{ rotateY: 15, scale: 1.1 }}
                  transition={microReboundPreset}
                >
                  C
                </m.div>
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-xl group-hover:text-pink transition-colors">
                    Color System
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    13 beautiful colors with light/dark variants and semantic tokens
                  </p>
                </div>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "card p-8 group cursor-pointer relative overflow-hidden",
                "hover:shadow-xl hover:shadow-blue/15",
                "transition-all duration-300 ease-out",
                "focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:outline-none"
              )}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="TypeScript feature"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-center space-y-6">
                <m.div 
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-blue to-blue-dark rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:shadow-xl group-hover:shadow-blue/20"
                  whileHover={{ rotateY: 15, scale: 1.1 }}
                  transition={microReboundPreset}
                >
                  T
                </m.div>
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-xl group-hover:text-blue transition-colors">
                    TypeScript
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    Full type definitions for all color values with IntelliSense
                  </p>
                </div>
              </div>
            </m.div>

            <m.div 
              className={cn(
                "card p-8 group cursor-pointer relative overflow-hidden",
                "hover:shadow-xl hover:shadow-green/15",
                "transition-all duration-300 ease-out",
                "focus:ring-2 focus:ring-green focus:ring-offset-2 focus:outline-none"
              )}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={microReboundPreset}
              tabIndex={0}
              role="button"
              aria-label="TailwindCSS feature"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative text-center space-y-6">
                <m.div 
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-green to-green-dark rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:shadow-xl group-hover:shadow-green/20"
                  whileHover={{ rotateY: 15, scale: 1.1 }}
                  transition={microReboundPreset}
                >
                  T
                </m.div>
                <div className="space-y-3">
                  <h4 className="font-bold text-foreground text-xl group-hover:text-green transition-colors">
                    TailwindCSS
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    CSS-based configuration with @theme directives v4 support
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </section>
      </div>
    </div>
  )
}
