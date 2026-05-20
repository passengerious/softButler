## Diagnosis

The "Name" field in the "Send us a message" form did not have a maximum character limit, allowing users to enter extremely long strings that could potentially break the UI layout or database schema constraints.

## Root Cause

The `<input type="text" name="name" />` element in the Contact component was missing standard HTML5 length validation attributes and JS trimming limits.

## Fix

1. **Updated `src/pages/Contact.tsx`**:
   - Added the `maxLength={100}` attribute to the Name input field.
   - Enforced backend validation checks and trim logic before submission to ensure payload safety.

## Files Affected

- `src/pages/Contact.tsx`

## Verification

1. **Manual Check**:
   - Go to the Contact page.
   - Attempt to paste a string longer than 100 characters into the Name field.
   - Verify that the input strictly truncates at the 100-character boundary.
