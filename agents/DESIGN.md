---
name: Terra & Hearth
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#54433c'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#87736b'
  outline-variant: '#dac1b8'
  surface-tint: '#944925'
  primary: '#823b18'
  on-primary: '#ffffff'
  primary-container: '#a0522d'
  on-primary-container: '#ffe1d6'
  inverse-primary: '#ffb596'
  secondary: '#51634c'
  on-secondary: '#ffffff'
  secondary-container: '#d1e6c9'
  on-secondary-container: '#556850'
  tertiary: '#6c4820'
  on-tertiary: '#ffffff'
  tertiary-container: '#885f35'
  on-tertiary-container: '#ffe2c9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#76320f'
  secondary-fixed: '#d4e8cb'
  secondary-fixed-dim: '#b8ccb0'
  on-secondary-fixed: '#0f1f0d'
  on-secondary-fixed-variant: '#3a4b36'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is centered on "Architectural Warmth," catering to families seeking luxury through the lens of comfort and heritage. It rejects the cold, sterile aesthetic often found in high-end real estate, opting instead for an editorial, photography-first experience that feels like a physical lifestyle magazine. 

The style is a blend of **Minimalism** and **Tactile Elegance**. It uses heavy whitespace to let high-resolution photography of homes breathe, while employing subtle tonal layering to create a sense of physical depth. The emotional response is one of safety, prestige, and organic beauty—moving away from "transactional" UI toward "aspirational" storytelling.

## Colors
The palette is rooted in earth-derived pigments. The foundation is an off-white/cream (#FAF9F6) which provides a softer, more residential feel than pure white. 

- **Primary (Sienna/Terracotta):** Used for key brand moments, primary CTAs, and active states. It evokes the warmth of clay and baked earth.
- **Secondary (Sage Green):** A muted, organic green used for accents, success states, and lifestyle indicators. It connects the architecture to the landscape.
- **Tertiary (Warm Taupe):** Used for subtle backgrounds, dividers, and secondary interface elements to maintain a low-contrast, calming environment.
- **Typography:** Avoid absolute black. Use a deep charcoal-brown for primary text to maintain the "warmhearted" narrative.

## Typography
The typographic hierarchy relies on the contrast between the rhythmic, high-contrast strokes of **Playfair Display** and the functional, invisible clarity of **Inter**. 

Headlines should be treated as editorial elements. Large display type should use tighter letter-spacing to feel "locked" and intentional. Body text requires generous line-height (1.6) to ensure readability against the cream background. Use the "Label Caps" style for overlines, categories, and small metadata to provide a structured, organized feel to the page.

## Layout & Spacing
This design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The philosophy is "Airy and Expansive." 

- **Generous Margins:** Avoid crowding the edges. Desktop layouts should use a minimum of 64px outer margins to create a "framed" magazine look.
- **Section Breathing Room:** Use large vertical gaps (up to 120px) between major content blocks to prevent visual fatigue and emphasize the premium nature of the real estate.
- **Image Aspect Ratios:** Photography should primarily use 4:3 or 16:9 ratios with consistent rounded corners. Avoid mixing too many aspect ratios in a single view.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** rather than heavy shadows. 

- **Surface Levels:** The base is the cream #FAF9F6. Elevated cards or modals use pure white (#FFFFFF) with a very soft, high-diffusion shadow (15% opacity of the Taupe color) to appear "lifted" but not detached.
- **Soft Outlines:** Instead of harsh borders, use 1px solid strokes in the Tertiary Taupe color at low opacity (20-30%) to define boundaries without interrupting the visual flow.
- **Backdrop Blurs:** For navigation overlays, use a subtle background blur (8px) with a semi-transparent cream tint to maintain a sense of place while focusing the user.

## Shapes
The shape language is "Organic Geometric." While the underlying grid is rigid, the corners are notably soft to evoke a sense of welcome.

- **Standard Radius:** 16px (rounded-lg) is the default for property cards and images.
- **Large Radius:** 24px (rounded-xl) for featured hero containers and prominent sections.
- **Interactive Elements:** Buttons should use the standard 16px radius to match the card language, creating a unified and soft tactile feel.

## Components
- **Buttons:** Primary buttons use the Terracotta fill with white text. Secondary buttons use a Sage Green outline or a soft Taupe fill. Always use high horizontal padding (32px) to give buttons a wider, more luxurious stance.
- **Property Cards:** Cards should have no visible border; use the soft shadow mentioned in "Elevation." Images within cards must occupy the top 60% of the height.
- **Input Fields:** Use a subtle Taupe background and a bottom-border only (editorial style) or a fully rounded soft-border. Focus states should transition the border to Sage Green.
- **Chips/Tags:** Use the Sage Green at 10% opacity for the background and full opacity for the text. These should be pill-shaped to differentiate them from functional buttons.
- **Image Galleries:** Use a masonry or justified grid layout with consistent 16px spacing between images.