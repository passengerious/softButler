## Diagnosis

When viewing the site in mobile landscape mode (where viewport heights are very small, e.g., less than 500px), the top floating navigation header overlapped the upper parts of the main hero section title, partially obscuring the "Your QA Is Broken" text.

## Root Cause

The main hero section was centered strictly using `flex items-center justify-center` with `min-h-screen` and lacked top padding or margin allowance to offset the height of the fixed navigation header on compact vertical spaces.

## Fix

1. **Integrated Top Padding (`Hero.tsx`)**:
   - Added `pt-20 md:pt-0` to the main `<section>` element of the Hero component.
   - This reserves a safety zone of `5rem` (`80px`) at the top of the page on mobile/small viewports to prevent the fixed navigation header from overlapping the hero content, while returning to normal margins on medium screens and larger where height is not constrained.

## Files Affected

- `src/components/Hero.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the Home page.
   - Using Chrome DevTools or a physical mobile device, switch to mobile landscape orientation.
   - Verify that the hero section title has an appropriate top clearance, placing it completely clear of the top nav header.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Confirmed top offset works seamlessly in landscape simulation without pushing elements out of bounds in portrait mode.
