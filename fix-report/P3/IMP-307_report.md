## Diagnosis

The success notification (toast) that appeared after submitting the contact form was positioned too high, overlapping the website's sticky header component.

## Root Cause

The default `react-toastify` positioning (`top-right`) did not account for the fixed height of the site's navigation header (`h-20` / `80px`), causing a direct layout collision.

## Fix

1. **Updated ToastContainer configuration**:
   - Applied custom CSS overrides or updated the `toast` offset properties to ensure the notification renders below the sticky header area (e.g., adding `mt-20` or standard CSS margin overrides).

## Files Affected

- `src/App.tsx` / Toast configuration file
- `src/pages/Contact.tsx`

## Verification

1. **Manual Check**:
   - Submit the Contact form.
   - Verify the green success toast renders neatly beneath the site header.
