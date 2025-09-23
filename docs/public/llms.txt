# Pastel Colors

> A color library and sample site for design systems, offering three styles: Regular, Kawaii, and High Contrast. It covers application-level colors (accent/primary/secondary), semantic colors (text, background, border, separator, link, disabled), material transparency layers (ultraThick→opaque), and grayscale gradients (gray1→gray10). All colors are defined using OKLCH and offer light/dark variants to maintain consistent perceptual contrast and accessibility across themes and light/dark modes.

This project includes a color package (`packages/colors`) and a demo/documentation site (`docs`). Colors are created using the `createColor` tool to ensure consistency and composability. Styles:
- Regular: Universal, neutral default style suitable for most products
- Kawaii: Softer, cute-style light-color contrast controls
- High Contrast: Extreme contrast for enhanced readability and accessibility (WCAG-friendly)

Color Organization Structure and Recommendations:
- Application Colors: `accent`, `primary`, `secondary` (for branding, primary actions, secondary buttons, etc.)
- Semantic Colors: `text`, `placeholderText`, `border`, `separator`, `link`, `disabledControl`, `disabledText`; plus `background` and `fill` with progressive hierarchy (primary→quinary / primary→quaternary)
- Material Colors: `ultraThick`, `thick`, `medium`, `thin`, `ultraThin`, `opaque` (same color with varying opacity levels, used for frosted glass, card overlays, etc.)
- GrayScale: `gray1`→`gray10` (progresses and inverts under light/dark modes, supporting neutral interfaces and layering)
- Prioritize conveying intent through Application and Semantic categories before mapping specific hues; maintain semantic naming across light/dark modes, with variants automatically adjusting contrast.

- Theme Overview:
  - Regular: Default universal contrast with modern neutral palette, emphasizing balanced text/background gradation and soft colors.
  - Kawaii: Soft pastel hues (pink, blue, purple, cyan, etc.) with low saturation; refined text/borders suited for cute/warm-toned interfaces.
  - High Contrast: Enhanced text/background contrast, improved link/interaction visibility; used for accessibility-first or noisy environments.

- Application (Purpose):
  - accent: Brand accents, emphasis elements (logos, highlighted button borders/hover states, selected indicators)
  - primary: Primary actions/visuals (main buttons, key links, progress/highlighting)
  - secondary: Secondary actions/less prominent emphasis (secondary buttons, informational labels, auxiliary chart colors)

- Semantic (Purpose):
  - text
    - primary: Body/heading main text
    - secondary: Secondary descriptions, de-emphasized supplementary information
    - tertiary: Placeholder or minor-level labels/meta information
    - quaternary: Disabled state or extremely low-priority text
  - placeholderText
    - primary: Input field placeholder text
  - border
    - primary: Primary border for cards/inputs/popups
    - secondary: Weak grouping/block separator border
  - separator
    - primary: List item/module separator
  - link
    - primary: Text links, clickable text
  - disabledControl
    - primary: Background/border for disabled controls
  - disabledText
    - primary: Disabled text color
  - background (primary→quinary): Progressive background gradient for pages/cards/overlays/inner containers
  - fill (primary→quaternary): Progressive fill gradient for icons/controls
  - material (ultraThick→opaque): Opacity levels for frosted glass/overlay/card materials

- Gray Scale (Purpose):
  - gray1→gray10: Light-to-dark and dark-to-light grayscale gradients for background layering, strokes, and text softening; recommended with `separator` and `border` for stable hierarchy.

- Hue Usage (Cross-Theme Recommendations):
  - blue / indigo: Primary actions, links, interactive elements—emphasizing reliability and technological feel
  - cyan / sky / teal: Information prompts, secondary highlights—emphasizing clarity and freshness
  - green / emerald / lime: Success, approval, positive outcomes
  - red / rose: Errors, danger, destructive actions
  - orange / amber / yellow: Warnings, caution, in-progress states
  - purple / violet / pink: Brand identity, creative/joyful tone, decorative emphasis
  - brown: Neutral labels/backgrounds, secondary information emphasis
  - slate / zinc / gray / neutral: Neutral text and surfaces, outlines, separators
  - white / black: Baseline for very light/very dark surfaces and text

- Regular Style:
  - Primary Colors: blue, pink, purple, green, orange, yellow, sky, red, brown, gray, neutral, black, white, teal, cyan, indigo, violet, lime, emerald, amber, rose, slate, zinc
  - Application Level (regularApplicationColors): accent (brand accents), primary (primary interactions), secondary (secondary interaction)
  - Semantic Level (regularElementColors / regularBackgroundColors / regularFillColors / regularMaterialColors):
    - text.*, border.*, separator.primary, link.primary, disabled*, background.* (primary→quinary), fill.* (primary→quaternary), material.* (ultraThick→opaque)
- Grayscale (regularGrayScale): gray1→gray10 supporting neutral surfaces and contrast levels

- Kawaii Style:
- Distinctive features: More refined text/border contrast control on light color palettes; softer background/fill gradations
  - Application Level (kawaiiApplicationColors): accent/primary/secondary follow Regular roles, with softer hue and luminance
  - Semantic Level (kawaiiElementColors, etc.): links lean toward soft blue/cyan; disabled* aligns with overall color temperature
  - Grayscale (kawaiiGrayScale): consistent gradation with Regular, adapted to overall style

- High Contrast Style:
  - Distinctive features: text is darker (light)/lighter (dark); links have higher saturation; background/fill spans a wider range; material elements exhibit stronger contrast
  - Application Level (highContrastApplicationColors): accent/primary/secondary colors presented with higher contrast
  - Semantic Level (highContrastElementColors, etc.): All semantic layers optimized under high-contrast constraints
  - Grayscale (highContrastGrayScale): Same gradient as Regular but with overall stronger contrast

## Docs

- [Demo Documentation Site](https://pastel.innei.dev/): Interactive preview of all themes and colors
 
## Optional

- [packages/colors source code (theme definitions)](https://github.com/Innei/pastel/tree/main/packages/colors/src): Theme and color definitions, including Regular/Kawaii/High Contrast
- [docs site source code](https://github.com/Innei/pastel/tree/main/docs): Example and preview site
- [Tailwind Theme Export (packages/tailwindcss-colors)](https://github.com/Innei/pastel/tree/main/packages/tailwindcss-colors): Generator and theme CSS export

