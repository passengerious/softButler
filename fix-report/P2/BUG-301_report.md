## Diagnosis

The Contact page form accepted email inputs without a Top-Level Domain (TLD) (e.g. `user@company`), which resulted in invalid email formats reaching the backend and potential communication failures.

## Root Cause

The native form input did not enforce strict TLD patterns, and the React validation code in `handleSubmit` only checked for simple non-empty string properties, without performing proper regex validation for the email domain structure.

## Fix

1. **Email TLD Format Validation (`Contact.tsx`)**:
   - Added regex check to ensure the submitted email conforms to standard formats and contains a valid top-level domain (`/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/`).
   - If invalid, the form execution is halted and a clean, informative error notification is displayed via `toast.error()`.

## Files Affected

- `src/pages/Contact.tsx`

## Verification

1. **Manual Check**:
   - Navigate to the Contact page.
   - Fill in valid Name and Message fields.
   - Enter `test@invalidemail` in the Email field and click "Let's Fix Your QA".
   - Verify that form submission is rejected and a toast notification states: `"Please enter a valid email address with a top-level domain (e.g. .com)"`.
   - Enter a correct format e.g. `test@invalidemail.com` and verify the submission succeeds.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Email format check successfully intercepts invalid email schemas before triggering Netlify functions.
