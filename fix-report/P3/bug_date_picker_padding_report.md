## Diagnosis

On smaller mobile devices (specifically Android viewports), the calendar and navigation elements (e.g., month navigation chevrons) within the consultation booking date picker were positioned too close to the screen boundaries and container edges, resulting in a cramped visual aesthetic and poor touch targets.

## Root Cause

In `src/components/BookingCalendar.tsx` and `src/components/InlineBookingCalendar.tsx`, the wrappers for the calendar grids and step sections lacked sufficient horizontal padding for narrow viewports. On screens smaller than `640px` (mobile), the container elements filled the space entirely, letting the interactive components directly touch the edges of the card or modal borders.

## Fix

1. **Updated `src/components/BookingCalendar.tsx`**:
   - Added horizontal padding `px-4 sm:px-6` to the Step 1 (Date Selection) `motion.div` wrapper.
2. **Updated `src/components/InlineBookingCalendar.tsx`**:
   - Added horizontal padding `px-4 sm:px-6` to the calendar container wrapper (`max-w-md mx-auto`).

## Files Affected

- `src/components/BookingCalendar.tsx`
- `src/components/InlineBookingCalendar.tsx`

## Verification

1. **Manual Check**:
   - Open the consultation calendars on a mobile-sized viewport or developer tool simulation.
   - Inspect the spacing around the month navigation arrows and the calendar dates.
   - Confirm there is a consistent, clean margin of at least `1rem` (`px-4`) separating interactive controls from container borders.

> [!NOTE]
> **Verification Context:**
> - **Premium Design:** Providing adequate margins on mobile layouts prevents visual crowding, enhancing ease-of-use and interactive precision.
