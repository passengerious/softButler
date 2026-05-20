## Diagnosis

When navigating backward in the multi-step "Book Your Free Consultation" forms using the "Back" or "Back to Date" buttons, the page (or modal scroll wrapper) did not reset its scroll position. As a result, the form elements on the previous step were partially cut off from view, forcing the user to manually scroll back up to see the start of the form.

## Root Cause

The components `BookingCalendar.tsx` and `InlineBookingCalendar.tsx` did not feature scroll-reset triggers on step change when navigating backwards. 
- In the fixed modal (`BookingCalendar.tsx`), the scroll position was local to the modal content scroll container.
- In the inline section (`InlineBookingCalendar.tsx`), the scroll position was related to the page viewport.
Neither component reset its respective scroll container to `0` or scrolled the component back into viewport focus upon backward navigation.

## Fix

1. **Updated `src/components/BookingCalendar.tsx`**:
   - Imported `useRef` and added `modalContentRef` targeting the modal's scrollable container.
   - Refactored the "Back" button handler to set the state back to step 1 and asynchronously trigger `modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })`.
2. **Updated `src/components/InlineBookingCalendar.tsx`**:
   - Added `sectionRef` targeting the main `<section>` element.
   - Refactored the `goBack` handler to decrement the step and asynchronously trigger `sectionRef.current?.scrollIntoView({ behavior: 'smooth' })`.

## Files Affected

- `src/components/BookingCalendar.tsx`
- `src/components/InlineBookingCalendar.tsx`

## Verification

1. **Manual Check**:
   - Scroll down to the consultation form.
   - Fill out the date select step and advance to the contact info step.
   - Scroll down to the bottom of the contact info step, then click "Back" / "Back to Date".
   - Confirm that the view smoothly scrolls back to the top of the calendar so that the entire month grid/calendar layout is fully visible.

> [!NOTE]
> **Verification Context:**
> - **UX Integrity:** Auto-scrolling to the start of the form on step changes prevents clipping and user disorientation, creating a seamless multi-step journey.
