## Diagnosis

On the Contact page, after the user filled out the form and successfully submitted their message, the "Send us a Message" heading remained visible directly above the success confirmation state ("Message Sent!"). This created a cluttered UI layout, as the heading was no longer relevant once the form itself disappeared.

## Root Cause

In `src/pages/Contact.tsx`, the `<h3>Send us a Message</h3>` element was rendered outside of the conditional ternary block `{isSubmitted ? ... : ...}` that toggled between the submitted success state and the input form. As a result, the heading was rendered statically regardless of the submission status.

## Fix

1. **Updated `src/pages/Contact.tsx`**:
   - Relocated the `<h3>Send us a Message</h3>` heading element inside the negative (unsubmitted) branch of the `isSubmitted` ternary operator.
   - Wrapped the heading and the `<form>` element in a React Fragment (`<>...</>`) inside the `else` branch of the submission state to allow returning sibling nodes.

## Files Affected

- `src/pages/Contact.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the `/contact` page.
   - Confirm that the "Send us a Message" heading is visible initially above the form.
   - Submit the form with valid test data.
   - Verify that upon success, the "Send us a Message" heading vanishes completely, leaving only the clean "Message Sent!" confirmation view with the success checkmark.

> [!NOTE]
> **Verification Context:**
> - **UX Polish:** Hiding the heading on success ensures that the user is presented with a singular, high-clarity success confirmation screen, maintaining a clean and focused layout.
