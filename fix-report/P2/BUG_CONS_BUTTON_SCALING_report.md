## Diagnosis

In the final confirmation step of the inline booking calendar component, the action buttons ("Back to Date" and "Book Free QA Audit") suffered from poor scaling and overlapped or squeezed text labels horizontally on small/mobile screen widths.

## Root Cause

The buttons were wrapped in a standard `flex space-x-4` row container and each button was forced to share equal space using `flex-1` unconditionally. On narrow viewports, the computed width of each button dropped below the width of their respective text labels plus icon paddings, breaking layouts.

## Fix

1. **Responsive Flex Stacking Layout (`InlineBookingCalendar.tsx`)**:
   - Replaced `flex space-x-4` with the responsive container class `flex flex-col sm:flex-row gap-4`.
   - Replaced each button's `flex-1` class with responsive widths: `w-full sm:w-1/2`.
   - Under this setup, the buttons stack vertically on mobile (taking up full width each, preventing any possible text clipping or overlap) and realign gracefully into a horizontal row next to each other on tablet/desktop sizes (`sm:` screen size and above).

## Files Affected

- `src/components/InlineBookingCalendar.tsx`

## Verification

1. **Manual Check**:
   - Open the Consultation booking widget on a mobile device or screen narrow preset.
   - Proceed to the final confirmation form.
   - Verify that the action buttons are stacked vertically on top of each other, displaying their text completely and offering a large, easy-to-tap target area.
   - Resize browser up to desktop size and verify that they realign side-by-side perfectly.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Responsive stacking behavior performs cleanly without layout regressions.
