export interface ColorRecommendation {
  category: string
  recommendations: string[]
}

export const colorRecommendations: Record<string, ColorRecommendation> = {
  // Regular Colors
  blue: {
    category: 'Primary',
    recommendations: [
      'Ideal for primary actions and call-to-action buttons',
      'Excellent for links and navigation elements',
      'Works well as brand accent color',
      'Suitable for information and status indicators'
    ]
  },
  
  pink: {
    category: 'Accent',
    recommendations: [
      'Perfect for highlights and special promotions',
      'Great for creative and playful interfaces',
      'Use sparingly for maximum impact',
      'Excellent for notifications and alerts'
    ]
  },
  
  purple: {
    category: 'Creative',
    recommendations: [
      'Ideal for creative and artistic applications',
      'Great for premium and luxury branding',
      'Works well for creative tools and media',
      'Suitable for badges and achievements'
    ]
  },
  
  green: {
    category: 'Success',
    recommendations: [
      'Perfect for success states and confirmations',
      'Excellent for positive feedback and growth metrics',
      'Great for environmental and health themes',
      'Ideal for submit buttons and completion states'
    ]
  },
  
  yellow: {
    category: 'Warning',
    recommendations: [
      'Ideal for warnings and attention-grabbing elements',
      'Great for highlighting important information',
      'Use with caution for text due to contrast issues',
      'Perfect for energy and optimism themes'
    ]
  },
  
  red: {
    category: 'Error',
    recommendations: [
      'Essential for error states and destructive actions',
      'Perfect for urgent notifications and alerts',
      'Great for delete buttons and critical warnings',
      'Use carefully to avoid alarm fatigue'
    ]
  },
  
  orange: {
    category: 'Energy',
    recommendations: [
      'Excellent for energetic and dynamic interfaces',
      'Great for call-to-action buttons in e-commerce',
      'Perfect for autumn and warm themes',
      'Ideal for creative and playful applications'
    ]
  },
  
  cyan: {
    category: 'Fresh',
    recommendations: [
      'Perfect for fresh and modern interfaces',
      'Great for technology and innovation themes',
      'Excellent for data visualization',
      'Ideal for cool and calming environments'
    ]
  },
  
  gray: {
    category: 'Neutral',
    recommendations: [
      'Essential for text and subtle UI elements',
      'Perfect for borders and dividers',
      'Great for secondary actions and disabled states',
      'Ideal for professional and minimal designs'
    ]
  },
  
  // Semantic Colors
  text: {
    category: 'Typography',
    recommendations: [
      'Primary text color for body content',
      'Ensures optimal readability and contrast',
      'Use for headings and main content',
      'Follows accessibility guidelines'
    ]
  },
  
  'text-secondary': {
    category: 'Typography',
    recommendations: [
      'Secondary text for supporting information',
      'Perfect for captions and metadata',
      'Great for form labels and descriptions',
      'Maintains hierarchy while staying readable'
    ]
  },
  
  background: {
    category: 'Layout',
    recommendations: [
      'Primary background for main content areas',
      'Provides optimal contrast for text',
      'Creates clean and minimal layouts',
      'Supports both light and dark themes'
    ]
  },
  
  border: {
    category: 'Structure',
    recommendations: [
      'Standard border color for UI elements',
      'Creates subtle separation between sections',
      'Perfect for form inputs and cards',
      'Maintains visual hierarchy'
    ]
  },
  
  accent: {
    category: 'Interactive',
    recommendations: [
      'Primary interactive element color',
      'Perfect for buttons and active states',
      'Great for focus indicators',
      'Ensures consistent user experience'
    ]
  },
  
  // Default fallback
  default: {
    category: 'General',
    recommendations: [
      'Versatile color suitable for various UI elements',
      'Consider contrast ratios when using as background',
      'Test with different content types',
      'Ensure accessibility compliance'
    ]
  }
}

export function getColorRecommendations(colorName: string): ColorRecommendation {
  return colorRecommendations[colorName] || colorRecommendations.default
}