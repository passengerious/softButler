## Diagnosis

On mobile/small screens, the absolute-positioned decorative floating cards (specifically, the "Shield / All Tests Passed" card at the top-right and "Zap / Bug Detected" card at the bottom-left) overlapped with the primary hero headings and CTA buttons, rendering the text hard to read or unclickable.

## Root Cause

The floating cards utilized fixed viewport-relative positioning classes without responsive visibility media query helpers, showing up on all screen widths regardless of standard typography boundaries.

## Fix

1. **Responsive Visibility Filters (`Hero.tsx`)**:
   - Added Tailwind CSS class `hidden md:block` to both floating card container elements.
   - This hides them completely on screen widths less than standard tablet sizes (`768px`), ensuring they are only rendered when there is ample horizontal margins to support them.

## Files Affected

- `src/components/Hero.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the Home page.
   - Resize the browser down to mobile width or use a mobile emulator preset.
   - Verify that the floating shield and zap elements are hidden and the main text has clear breathing space with no overlaps.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Responsive breakpoints evaluated cleanly across standard mobile layouts.
