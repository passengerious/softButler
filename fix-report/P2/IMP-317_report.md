## Diagnosis

On devices in landscape mode or screens with narrow vertical heights (like small laptops or mobile in landscape orientation), after clicking submit, the page did not scroll. As a result, the success message and updated layout remained hidden below the fold, causing confusion as to whether the form succeeded or not.

## Root Cause

Next.js page router did not scroll the window back up automatically upon state transitions inside `Contact.tsx`, keeping the user focused on the coordinates where the submit button was located.

## Fix

1. **Auto Smooth-Scroll on Success (`Contact.tsx`)**:
   - Integrated a scroll trigger in the `handleSubmit` success handler right after state is updated:
     ```typescript
     window.scrollTo({ top: 0, behavior: 'smooth' });
     ```
   - This ensures the viewpoint is smoothly translated to the very top, perfectly showcasing the new dynamic success layout and "Message Sent!" confirmation.

## Files Affected

- `src/pages/Contact.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the Contact page.
   - Resize your browser window height to be quite small (mimicking landscape mode) or use Chrome DevTools device mode in landscape.
   - Fill in valid credentials and submit the form.
   - Verify that the browser instantly performs a smooth, elegant scroll to the top of the contact section, bringing the success states fully into view.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Confirmed window scroll behavior operates cleanly on success without side effects.
