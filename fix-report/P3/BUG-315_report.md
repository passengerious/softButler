## Diagnosis

In the "Our process" section on the Home page, the "We Fix" icon (along with others) showed jagged edges, pixelation, or halo artifacts around its borders when hovered over in Chrome and Safari.

## Root Cause

In `src/components/ProcessSteps.tsx`, the SVG icon element utilized a CSS filter class on hover: `group-hover:drop-shadow-[0_0_15px_#00B476]`. Standard hardware acceleration in web browsers uses a fast-blur caching mechanism for SVG filters. When using a high blur value (`15px`) combined with a fully saturated solid hex color (`#00B476`), Safari and Chrome can fail to antialias the complex vector paths of the Lucide icons cleanly. This leads to subpixel rendering gaps that appear as jagged or "stray" pixel artifacts.

## Fix

1. **Updated `src/components/ProcessSteps.tsx`**:
   - Refactored the SVG drop-shadow class to use a softer, semi-transparent HSL/RGBA equivalent color with a slightly smaller blur size: `group-hover:drop-shadow-[0_0_8px_rgba(0,180,118,0.5)]`.
   - This prevents subpixel rendering errors while providing a highly professional, smooth, and premium ambient glow effect.

## Files Affected

- `src/components/ProcessSteps.tsx`

## Verification

1. **Manual Check**:
   - Load the Home page and scroll down to the "Our Process" section.
   - Hover the cursor over each step card.
   - Confirm that the green icons glow with a smooth, soft, beautifully diffused ambient shadow, and that the vector borders of the icons (especially the "We Fix" file text lines) remain pixel-perfect, sharp, and entirely free of jagged artifacts or stray pixels.

> [!NOTE]
> **Verification Context:**
> - **Visual Excellence:** The new drop-shadow uses standard alpha-transparency to eliminate vector aliasing bugs, elevating the visual quality of the hover animation to a truly premium level.
