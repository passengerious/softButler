## Diagnosis

To improve the user experience and reduce friction, the consultation booking form needed to be streamlined. The multi-step form contained an unnecessary second step (time-slot selection) that separated date selection from input details, introducing extra clicks and cognitive load.

## Root Cause

The initial wizard form implementation in `BookingCalendar` and `InlineBookingCalendar` utilized a three-step configuration:
1. **Step 1:** Select Date
2. **Step 2:** Select Time Slot
3. **Step 3:** Enter Details & Submit

This extra time selection step was deemed redundant and required elimination to ensure a direct, efficient 2-step user path.

## Fix

1. **Refactored `BookingCalendar.tsx` and `InlineBookingCalendar.tsx`**:
   - Completely removed the intermediate time-slot selection step and its associated state/hooks (such as time check APIs/queries).
   - Reconfigured the form flow to jump directly from Step 1 (Date Selection) to Step 2 (Contact Details & Message).
   - Updated all stepper headers and step indicator labels to display "Step 1 of 2" and "Step 2 of 2" respectively.
   - Updated the navigation buttons: changed the back-navigation button on the final details screen from "Back to Time" to **"Back to Date"**.

## Files Affected

- `src/components/BookingCalendar.tsx`
- `src/components/InlineBookingCalendar.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the Home page or click "Book a Call" to trigger the booking modal.
   - Select a date on the calendar.
   - Verify that the wizard immediately transitions to the form details page without intermediate steps.
   - Confirm that the detail form indicates "Step 2 of 2" and contains a "Back to Date" button that successfully returns to the calendar.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Fully verified that the form flow operates correctly in a 2-step manner in both the inline widget and the popup modal on `http://localhost:3001`.
> - **Production Host:** No separate host-only validation required.
