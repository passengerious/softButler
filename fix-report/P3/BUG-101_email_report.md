## Diagnosis

The direct contact email address `start@softbutler.io` displayed in the footer was plain static text. It was not clickable and lacked any hover states or standard `mailto:` action.

## Root Cause

In `src/components/Footer.tsx`, the email entry was rendered inside a static `div` wrapper element instead of an interactive `a` link tag with a `mailto:start@softbutler.io` destination.

## Fix

1. **Updated `src/components/Footer.tsx`**:
   - Replaced `<div className="flex items-center gap-2">` with an `<a href="mailto:start@softbutler.io" className="flex items-center gap-2 hover:text-green-500 transition-colors">` tag.
   - This ensures the email is interactive, highlights on hover with a premium green color transition, and opens the user's default email client when clicked.

## Files Affected

- `src/components/Footer.tsx`

## Verification

1. **Manual Check**:
   - Scroll to the bottom of any page on the website.
   - Hover over `start@softbutler.io` in the Direct Contact footer section.
   - Verify that it transitions to green and shows the pointer cursor.
   - Click the email to verify it triggers the native email client (e.g., Mail, Outlook) pre-filled with the email address.

> [!NOTE]
> **Verification Context:**
> - **Direct Contact Accessibility:** The email link operates exactly like the neighboring phone and Telegram links.
