---
name: Fluentify Core
colors:
  surface: '#f6fafe'
  surface-dim: '#d6dade'
  surface-bright: '#f6fafe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f8'
  surface-container: '#eaeef2'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e7'
  on-surface: '#171c1f'
  on-surface-variant: '#464652'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#767684'
  outline-variant: '#c6c5d5'
  surface-tint: '#4b53bb'
  primary: '#4b53bb'
  on-primary: '#ffffff'
  primary-container: '#8b93ff'
  on-primary-container: '#1d238f'
  inverse-primary: '#bec2ff'
  secondary: '#006b58'
  on-secondary: '#ffffff'
  secondary-container: '#6ff6d5'
  on-secondary-container: '#00705c'
  tertiary: '#895032'
  on-tertiary: '#ffffff'
  tertiary-container: '#d28c6a'
  on-tertiary-container: '#56270c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bec2ff'
  on-primary-fixed: '#00016d'
  on-primary-fixed-variant: '#3239a2'
  secondary-fixed: '#72f9d8'
  secondary-fixed-dim: '#51dcbc'
  on-secondary-fixed: '#002019'
  on-secondary-fixed-variant: '#005142'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#6d391d'
  background: '#f6fafe'
  on-background: '#171c1f'
  surface-variant: '#dfe3e7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style
The design system is built on a **Claymorphic** aesthetic, blending futuristic AI technology with a soft, human-centric touch. The goal is to lower the anxiety associated with communication coaching by using "inflated," tactile interfaces that feel friendly and approachable. 

The style utilizes deep rounded corners, multi-layered inner shadows to simulate 3D volume, and vibrant pastel gradients to create a sense of optimism and confidence. It avoids the harshness of traditional corporate tools, opting instead for a playful yet sophisticated "squishy" realism that makes the AI interaction feel personal and encouraging.

## Colors
The palette is centered on smooth, high-vibrancy pastels that evoke a sense of growth and clarity. 

- **Primary (Lavender):** Used for main actions and brand identity, symbolizing wisdom and sophistication.
- **Secondary (Mint Green):** Used for "success" states, progress indicators, and positive feedback.
- **Tertiary (Peach):** Used for highlighting and energetic call-outs to build user motivation.
- **Neutral:** A very light, cool-toned grey-blue is used for backgrounds to allow the claymorphic elements to "pop" without creating harsh contrast.

Avoid pure blacks; use deep indigo for text to maintain the soft, futuristic harmony.

## Typography
This design system utilizes **Inter** for its systematic clarity and modern, neutral profile. Because the UI elements are visually heavy (claymorphic shadows and gradients), the typography remains clean and highly legible to provide balance.

- **Headlines:** Use tight letter-spacing and bold weights to ground the soft UI.
- **Body Text:** Ample line height is required to ensure readability against colorful or shadowed backgrounds.
- **Labels:** Used for micro-copy and metadata, often in semi-bold to distinguish from body content.

## Layout & Spacing
The layout follows a fluid-to-fixed transition. On mobile, components occupy the full width with 24px side margins. On desktop, a 12-column grid is used with a maximum container width of 1200px.

Because claymorphic elements occupy more visual "volume" due to their shadows, spacing between elements should be generous (the "stack-md" or "stack-lg" units) to prevent the interface from feeling cluttered or claustrophobic. Use whitespace as a structural tool to let the 3D shapes breathe.

## Elevation & Depth
Elevation is achieved through the **Claymorphism** technique:
1.  **Outer Shadows:** Soft, large-radius shadows using a slightly darker version of the background color (not black) to create the "lift."
2.  **Inner Shadows:** Two layers are used. A light-colored inner shadow on the top-left to simulate a "highlight" and a darker-toned inner shadow on the bottom-right to create "volume" and the "squishy" look.
3.  **Backdrop Blurs:** When elements overlap, a subtle backdrop blur (12px) is used to maintain the futuristic, high-tech AI feel.

## Shapes
The shape language is defined by extreme roundedness. Sharp corners are entirely avoided. Surfaces should feel "inflated." 

- **Default:** 16px (1rem) for most small components.
- **Large (Cards/Modals):** 32px (2rem) to emphasize the soft, clay-like appearance.
- **Pill:** Used for buttons and chips to maximize the tactile, friendly aesthetic.

## Components

### Clay Buttons
- **Primary:** Lavender gradient background. Uses a 3-layer shadow system: an outer glow (8px), a white top-inner shadow (highlight), and a purple bottom-inner shadow (depth). On press, the element "deflates" by reducing the outer shadow.
- **Secondary:** Peach or Mint gradient. Follows the same shadow logic but with corresponding color tints for the depth shadow.

### Clay Cards
Cards serve as the primary container for AI feedback and coaching modules. They should have a white or very light pastel base with a border-radius of 32px and the `clay-card` shadow definition.

### Input Fields
Inputs are recessed. Instead of an outer shadow, they use a "deep" inner shadow to appear as if they are carved into the clay surface.

### Coaching Chips
Small, pill-shaped tags used for feedback categories (e.g., "Tone," "Pace," "Confidence"). These use high-vibrancy pastel backgrounds with no outer shadow, only the white top-inner highlight.

### Progress Bubbles
Circular AI status indicators that use the Sky Calm gradient with a slight pulse animation, mimicking a breathing motion to make the AI feel "alive."