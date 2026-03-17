# Portfolio Design System

Source: one homepage screenshot plus the typography and button notes provided by the user on 2026-03-17.

Priority rule: explicit user notes override anything inferred from the screenshot.

## Design Direction

The interface is editorial and academic rather than product-like: high-contrast black typography on a pure white canvas, with a single gold accent used as a glow/light source rather than as a fill color. The visual language is quiet, print-inspired, and slightly romantic because of the serif display face, while the body copy remains highly readable through a hyperlegible sans-serif.

## Remaining Assumptions

Most of the missing values from the initial brief are now resolved. The only remaining best-guess defaults are layout rhythm values that cannot be measured exactly from a single screenshot:

- Section spacing between major content blocks.
- Generic grid-gap tokens for future two-column or repeated-card layouts.

## Global Variables

### Font Families

```css
--font-display: "Cormorant Garamond", "Times New Roman", serif;
--font-body: "Atkinson Hyperlegible Next", "Arial", sans-serif;
--font-ui: "Lilex", "Courier New", monospace;
```

### Color Tokens

Explicit:

```css
--color-ink: #000000;
--color-ink-muted: rgb(0 0 0 / 55%);
--color-accent: #fdc700;
```

Neutral surfaces:

```css
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-divider: rgb(0 0 0 / 15%);
--color-shadow-muted: rgb(0 0 0 / 40%);
--color-shadow-accent-soft: rgb(253 199 0 / 40%);
--color-shadow-accent-mid: rgb(253 199 0 / 50%);
--color-shadow-accent-strong: rgb(253 199 0 / 100%);
```

### Typography Tokens

#### Display Title

Used for the hero title.

```css
--text-display-xl-family: var(--font-display);
--text-display-xl-size: 64px;
--text-display-xl-line-height: 1.1;
--text-display-xl-letter-spacing: -0.025em;
--text-display-xl-weight: 700;
--text-display-xl-style: italic;
```

#### Display Section Title

Used for major section headings such as "About me", "Resume", and subsection titles with strong editorial emphasis.

```css
--text-display-lg-family: var(--font-display);
--text-display-lg-size: 48px;
--text-display-lg-line-height: 1.1;
--text-display-lg-letter-spacing: -0.025em;
--text-display-lg-weight: 700;
--text-display-lg-style: italic;
```

#### Editorial Entry Title

Used for publication, experience, and education entry titles.

This is the same display font family, in an extra-bold, black variant.

```css
--text-entry-title-family: var(--font-display);
--text-entry-title-size: 18px;
--text-entry-title-line-height: 1.2;
--text-entry-title-letter-spacing: -0.01em;
--text-entry-title-weight: 800;
--text-entry-title-style: normal;
--text-entry-title-color: var(--color-ink);
--text-entry-title-paragraph-spacing: 0;
--text-entry-title-list-spacing: 0;
```

#### Body Text

Used for paragraphs, metadata, labels, and supporting copy.

```css
--text-body-family: var(--font-body);
--text-body-size: 18px;
--text-body-line-height: 1.2;
--text-body-letter-spacing: -0.01em;
--text-body-weight: 500;
--text-body-style: normal;
--text-body-color: var(--color-ink-muted);
--text-body-paragraph-spacing: 0;
--text-body-list-spacing: 0;
```

#### Emphasized Body Text

Used inline for emphasis within body copy.

```css
--text-body-emphasis-family: var(--font-body);
--text-body-emphasis-size: 18px;
--text-body-emphasis-line-height: 1.2;
--text-body-emphasis-letter-spacing: -0.01em;
--text-body-emphasis-weight: 800;
--text-body-emphasis-style: italic;
--text-body-emphasis-color: var(--color-ink-muted);
--text-body-emphasis-paragraph-spacing: 0;
--text-body-emphasis-list-spacing: 0;
```

#### Location / Meta Italic

Used for locations in publications, experiences, and education.

```css
--text-meta-family: var(--font-body);
--text-meta-size: 18px;
--text-meta-line-height: 1.2;
--text-meta-letter-spacing: -0.01em;
--text-meta-weight: 500;
--text-meta-style: italic;
--text-meta-color: var(--color-ink-muted);
--text-meta-paragraph-spacing: 0;
--text-meta-list-spacing: 0;
```

#### UI Label Text

Used for buttons, small navigation items, and utility labels.

```css
--text-ui-family: var(--font-ui);
--text-ui-size: 14px;
--text-ui-line-height: 1.15;
--text-ui-weight: 600;
--text-ui-style: normal;
```

### Effects

#### Gold Glow

Applied to the main hero title and to the active page label in the header.

```css
--shadow-glow-display: 0 0 40px #fdc700;
```

There is no x or y shift on this glow.

#### Button Shadows

Default primary:

```css
--shadow-button-primary: -4px 4px 10px rgb(253 199 0 / 40%);
```

Hover primary:

```css
--shadow-button-primary-hover: -6px 6px 10px rgb(253 199 0 / 100%);
```

Default muted:

```css
--shadow-button-muted: -4px 4px 10px rgb(0 0 0 / 40%);
```

Hover muted:

```css
--shadow-button-muted-hover: -6px 6px 10px rgb(253 199 0 / 50%);
```

### Shape And Border Tokens

Borders are `2px`, visually inside, with no rounding.

```css
--border-width-default: 2px;
--radius-button: 0px;
--radius-media: 0px;
--radius-card: 0px;
```

### Spacing And Layout Tokens

These are now mostly confirmed. Section spacing and generic grid gaps remain best-guess defaults based on the screenshot and the page's editorial density.

```css
--size-logo-width: 32px;
--container-max: 1040px;
--container-pad-x: 120px;
--section-gap-xl: 88px; /* best guess */
--section-gap-lg: 64px; /* best guess */
--section-gap-md: 40px; /* best guess */
--grid-gap-sm: 16px; /* best guess */
--grid-gap-md: 24px; /* best guess */
--grid-gap-lg: 32px; /* best guess */
--stack-gap-sm: 12px;
--stack-gap-md: 20px;
--stack-gap-lg: 32px;
--button-padding-x: 16px;
--button-padding-y: 16px;
--icon-button-size: 30px;
--icon-button-padding: 10px;
--icon-arrow-size: 10px;
```

### Motion Tokens

The interface is mostly static. Motion should stay restrained and be used only for hover feedback.

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
- Right: utility icon and contact link.

Behavior and style:

- The logo renders at exactly `32px` wide.
- Header text uses the UI text scale.
- Active nav item receives the gold glow token used on the hero title.
- Non-active nav items are plain black with no decorative underline.
- The overall header line is thin, quiet, and horizontally distributed rather than boxed.

### Hero

Structure:

- Two-line greeting on the left using the display title style.
- Large portrait image below-left.
- Introductory text block to the right of the portrait.
- Small row of actions below the intro paragraph.

Behavior and style:

- The title uses the gold glow.
- The image has a soft media radius and no heavy framing.
- The intro copy uses body text, not display text.
- Button group aligns horizontally with even spacing.

### Buttons

Common rules:

- Font: `var(--font-ui)`.
- Size: `14px`.
- Weight: `600`.
- Shape: strict rectangle.
- Border: `2px solid`, visually inside.
- Padding: `16px` on all sides.
- Buttons shift `2px` up and `2px` right on hover.
- Focus styling should reuse the gold accent rather than default browser blue.

#### Primary Button

- Text color: `--color-ink`.
- Border color: `--color-ink`.
- Background: transparent or very lightly warm-tinted; the screenshot reads nearly flat.
- Shadow: `--shadow-button-primary`.
- Hover shadow: `--shadow-button-primary-hover`.

#### Muted Button

- Text color: `--color-ink-muted`.
- Border color: `--color-ink-muted`.
- Background: transparent.
- Shadow: `--shadow-button-muted`.
- Hover shadow: `--shadow-button-muted-hover`.

### Section Heading Block

- Major section titles use the display section title style.
- Supporting paragraphs underneath use muted body copy.
- Sections are separated by generous white space rather than colored panels.

### Resume Section

Structure:

- Subsection heading in display serif italic, for example `Publications`, `Experience`, `Education`.
- A vertical stack of entries separated by whitespace or very light dividers.

Each entry contains:

- Title using the editorial entry-title token.
- Secondary metadata line with authors, institution, or organization.
- Short bullet list or paragraph summary in muted body text.
- Date and location block aligned to the right on desktop.
- Small external-link action aligned to the far right where relevant.

### External Link Action

- Fixed `30px` by `30px` square button.
- Border: `2px solid`, visually inside, using muted body color.
- Uses the same shadow logic as secondary controls, but more subtle.
- Arrow icon is `10px` by `10px`.
- Internal padding is `10px`.

### Languages Row

- Display section title for the heading.
- A horizontal list of language items with generous spacing.
- Each item is short, black or near-black, and visually lightweight compared to resume entries.

### Footer

Structure:

- Thin divider on top.
- Left: wordmark and copyright line.
- Middle/right: compact link columns such as navigation and external links.

Style:

- Uses UI text for labels and body text for small supporting copy.
- Divider should be visually present but faint.

## Implementation Notes

- Treat the typography system as the primary brand asset. Most of the character comes from font pairing, italic contrast, and restrained gold glow.
- The gold accent should almost never be used as a fill color. It behaves like light, not paint.
- Black should appear in two main opacities: full black for structural emphasis and `55%` black for reading text and muted controls.
- The page should stay sparse. If a layout decision makes the page feel crowded, reduce density before adding ornament.

## Suggested CSS Variable Map

```css
:root {
  --font-display: "Cormorant Garamond", "Times New Roman", serif;
  --font-body: "Atkinson Hyperlegible Next", "Arial", sans-serif;
  --font-ui: "Lilex", "Courier New", monospace;

  --color-bg: #ffffff;
  --color-surface: #ffffff;
  --color-ink: #000000;
  --color-ink-muted: rgb(0 0 0 / 55%);
  --color-accent: #fdc700;
  --color-divider: rgb(0 0 0 / 15%);

  --text-display-xl-size: 64px;
  --text-display-lg-size: 48px;
  --text-body-size: 18px;
  --text-ui-size: 14px;

  --shadow-glow-display: 0 0 40px #fdc700;
  --shadow-button-primary: -4px 4px 10px rgb(253 199 0 / 40%);
  --shadow-button-primary-hover: -6px 6px 10px rgb(253 199 0 / 100%);
  --shadow-button-muted: -4px 4px 10px rgb(0 0 0 / 40%);
  --shadow-button-muted-hover: -6px 6px 10px rgb(253 199 0 / 50%);

  --border-width-default: 2px;
  --radius-button: 0px;
  --radius-media: 0px;

  --size-logo-width: 32px;
  --container-max: 1040px;
  --container-pad-x: 120px;
  --section-gap-xl: 88px;
  --section-gap-lg: 64px;
  --section-gap-md: 40px;
  --grid-gap-sm: 16px;
  --grid-gap-md: 24px;
  --grid-gap-lg: 32px;
  --button-padding-x: 16px;
  --button-padding-y: 16px;
  --icon-button-size: 30px;
  --icon-button-padding: 10px;
  --icon-arrow-size: 10px;

  --motion-fast: 100ms;
  --motion-default: 100ms;
  --ease-standard: ease-in-out;
}
```

## Status

This file is sufficient to start implementing the global typography, color, button, and layout tokens. The only remaining flexible values are the section spacing and generic grid-gap defaults, which can be refined during page implementation.
