# Portfolio Design System

Source: explicit user notes provided on 2026-03-26.

Priority rule: explicit user notes override anything inferred from screenshots or previous iterations.

## Design Direction

The interface is editorial and academic rather than product-like: high-contrast black typography on a pure white canvas, with a single gold accent used as a glow/light source rather than as a fill color. The visual language is quiet, print-inspired, and slightly romantic because of the serif display face, while the body copy remains highly readable through a hyperlegible sans-serif.

## Global Variables

### Font Families

```css
--font-display: "Cormorant Garamond", "Times New Roman", serif;
--font-body: "Atkinson Hyperlegible Next", "Arial", sans-serif;
--font-ui: "Lilex", "Courier New", monospace;
```

### Color Tokens

```css
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-ink: #000000;
--color-ink-muted: rgb(0 0 0 / 55%);
--color-accent: #fdc700;
--color-divider: rgb(0 0 0 / 15%);
--color-shadow-muted: rgb(0 0 0 / 40%);
--color-shadow-accent-soft: rgb(253 199 0 / 40%);
--color-shadow-accent-mid: rgb(253 199 0 / 50%);
--color-shadow-accent-strong: rgb(253 199 0 / 100%);
```

### Typography Tokens

#### H1 — Display Title

Used for the hero title, and for primary section headings ("About me", "Resume") when paired with `accent-glow`.

```
Font: Garamond Bold Italic
Size: 64px
Line-height: 110% (1.1)
Letter-spacing: -2.5%
Color: black (#000000)
Glow: none by default (add .accent-glow where needed)
```

#### H2 — Section Title

Used for subsection headings: "Thesis research interests", "Why photography?", "Publications", "Experience", "Education", "Languages I speak".

```
Font: Garamond Bold Italic
Size: 48px
Line-height: 120% (1.2)
Letter-spacing: -2.5%
Color: black (#000000)
Glow: none
```

#### Body

Used for paragraphs, dates, bullet content, and general text.

```
Font: Atkinson Hyperlegible Next Medium
Size: 18px
Line-height: 120% (1.2)
Letter-spacing: -1%
Color: black 55% opacity
```

#### Body Emphasis

Used inline for key words in body text (e.g. "machine learning", "photography" in the hero).

```
Font: Atkinson Hyperlegible Next ExtraBold Italic
Size: 18px
Line-height: 120% (1.2)
Letter-spacing: -1%
Color: black 55% opacity
```

#### Card Title

Used for entry titles in publications/experience/education, footer list headings, language names, and active navigation state.

```
Font: Atkinson Hyperlegible Next ExtraBold
Size: 18px
Line-height: 120% (1.2)
Letter-spacing: -1%
Color: black (#000000)
```

#### Location / Meta Italic

Used for author lists, company/university names, venue names, and city/country in resume entries.

```
Font: Atkinson Hyperlegible Next Medium Italic
Size: 18px
Line-height: 120% (1.2)
Letter-spacing: -1%
Color: black 55% opacity
```

#### UI Label Text

Used for buttons.

```
Font: Lilex SemiBold
Size: 14px
Line-height: 115% (1.15)
Weight: 600
Color: varies by button variant
```

#### Footer Copyright

```
Font: Atkinson Hyperlegible Next Bold
Size: 13px
Line-height: 120% (1.2)
Letter-spacing: -1%
Color: black (#000000)
```

### Effects

#### Gold Glow

Applied to H1 headings where noted ("About me", "Resume") and to the active navigation item. H2 headings do NOT have glow.

```css
text-shadow: 0 0 40px #fdc700;
```

No x or y shift. Blur: 40px. Spread: 0. Color: #FDC700 at 100% alpha.

#### Button Shadows

```css
--shadow-button-primary: -4px 4px 10px rgb(253 199 0 / 40%);
--shadow-button-primary-hover: -6px 6px 10px rgb(253 199 0 / 100%);
--shadow-button-muted: -4px 4px 10px rgb(0 0 0 / 40%);
--shadow-button-muted-hover: -6px 6px 10px rgb(253 199 0 / 50%);
```

### Shape And Border Tokens

```css
--border-width-default: 2px;
--radius-button: 0px;
--radius-media: 0px;
--radius-card: 0px;
```

### Spacing And Layout Tokens

```css
--size-logo-width: 32px;
--container-max: 1040px;
--container-pad-x: 120px;
--section-gap-xl: 88px;
--section-gap-lg: 64px;
--section-gap-md: 40px;
--grid-gap-sm: 16px;
--grid-gap-md: 24px;
--grid-gap-lg: 32px;
--stack-gap-sm: 12px;
--stack-gap-md: 20px;
--stack-gap-lg: 32px;
--button-padding-x: 16px;
--button-padding-y: 16px;
--icon-button-size: 40px;
--icon-button-padding: 8px;
--icon-arrow-size: 24px;
```

### Motion Tokens

```css
--motion-fast: 100ms;
--motion-default: 100ms;
--ease-standard: ease-in-out;
```

## Components

### Page Shell

- Background uses `--color-bg`.
- Content sits in a centered container with generous horizontal padding and large vertical gaps between sections.
- The page should feel airy and editorial, never dense.

### Header

Structure:

- Left: wordmark `.lkt`.
- Center: primary navigation for `Home`, `Research & Code`, and `Photography`.
- Right: theme selector button (non-functional placeholder). No contact me button in the header (contact is in the hero).

Behavior and style:

- The logo renders at exactly `32px` wide.
- Navigation items use body text style (Atkinson Medium 18px, muted color).
- Active nav item uses card-title style + italic + underline + glow (Atkinson ExtraBold 18px, italic, text-decoration underline, gold glow, black color).
- Non-active nav items are muted with no underline.
- Theme selector is styled as a primary icon button (40x40, 24x24 sun icon) with no functionality for now.

### Hero

Structure:

- Two-line greeting using H1 style (no glow).
- Large portrait image below-left.
- Introductory text block to the right of the portrait in body style.
- "machine learning" and "photography" in body-emphasis (ExtraBold Italic).
- Small row of action buttons below the intro paragraph.

### Heading Hierarchy

- Hero title: H1 (no glow).
- "About me": H1 + glow.
- "Thesis research interests": H2 (glow built into style).
- "Why photography?": H2.
- "Resume": H1 + glow.
- "Publications", "Experience", "Education", "Languages I speak": H2.

### Buttons

Buttons are not changed from the current implementation. All shadow, padding, border, and hover behavior remains as-is.

Arrow icon used in external-link icon buttons is `arrow-up-right` from Lucide Icons (24x24), rendered inline as SVG. Icon buttons are 40x40.

"Learn more" and "Take a look" buttons use primary style (gold shadow), same as the hero "Contact me" button.

### Resume Entry Cards

Each entry (publication, experience, education) follows this structure:

1. **Title** in card-title style (Atkinson ExtraBold 18px, black).
2. **Date** in body style (Atkinson Medium 18px, muted). Positioned to the right on desktop.
3. **Author list / Company / University** in location style (Atkinson Medium Italic, muted).
4. **Venue / City, Country** in location style (Atkinson Medium Italic, muted). Positioned to the right on desktop.
5. **Content bullets** in body style.

Where applicable, the user's name is bolded within author lists.

External link icon button (arrow-up-right) appears at the far right for entries with an `href`.

### Languages Section

Heading: "Languages I speak" in H2 style.

Each language item has two lines:

1. Language name in card-title style (Atkinson ExtraBold, black).
2. Proficiency level in body style (Atkinson Medium, muted).

### Footer

Structure:

- Thin divider on top.
- Left column: wordmark, description in body style, copyright in footer-copyright style (Atkinson Bold 13px, black).
- Middle column: "Navigation" heading in card-title style, links in body style.
- Right column: "External links" heading in card-title style, links in body style.

## Implementation Notes

- Treat the typography system as the primary brand asset. Most of the character comes from font pairing, italic contrast, and restrained gold glow.
- The gold accent should almost never be used as a fill color. It behaves like light, not paint.
- Black should appear in two main opacities: full black for structural emphasis and `55%` black for reading text and muted controls.
- The page should stay sparse. If a layout decision makes the page feel crowded, reduce density before adding ornament.
- Space above standalone buttons (Contact me, Learn more, Take a look) should be generous. This does not apply to the publication external-link icon buttons.
