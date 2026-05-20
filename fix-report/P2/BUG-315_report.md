## Diagnosis

On high-DPI (Retina) screens running iOS/Safari, the corporate logo vector (`/logo3.svg`) in the header/footer appeared pixelated, fuzzy, or blurry, degrading the premium professional look of the page.

## Root Cause

The component rendered the SVG file using the Next.js `<Image />` component wrapper. Next.js image optimization processes can downsample SVG vectors or convert them into bitmapped formats at a predefined layout width, resulting in scaling fuzziness on high-density pixels screens like iPhones and iPads.

## Fix

1. **Standardized Image Element (`Logo.tsx`)**:
   - Replaced the custom Next.js `<Image />` component with a native HTML `<img>` tag.
   - Removed Next.js image imports (`import Image from 'next/image'`).
   - Native SVG scaling ensures that the browser retrieves and computes the mathematical vector path directly, rendering perfectly crisp curves regardless of device DPI or screen layout downscaling.
   - Added file-wide ESLint override `/* eslint-disable @next/next/no-img-element */` at the top of the file to prevent compile/lint warnings while maintaining the crisp vector graphic.

## Files Affected

- `src/components/Logo.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the page on an iOS Safari device or using responsive mode in Safari.
   - Zoom in or inspect the rotating logo icon in the header.
   - Verify that the vector edges are extremely sharp, high-contrast, and completely devoid of blurriness or pixel grid artifacts.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Sharpness confirmed using modern SVG rendering.
