## Diagnosis

Each page on the website displayed a "Connect" section at the bottom containing contact details and links that duplicated identical information already present in the global footer.

## Root Cause

The global `Layout` component in `src/App.tsx` rendered the `<ConnectSection />` component unconditionally right before `<Footer />`, resulting in redundant sections on all pages.

## Fix

1. **Updated `src/App.tsx`**:
   - Removed the import of `ConnectSection`.
   - Removed `<ConnectSection />` from the JSX tree so that pages transition cleanly into the global footer.

## Files Affected

- `src/App.tsx`

## Verification

1. **Manual Check**:
   - Navigate to any page on the website (e.g. Home, Services, Contact, Careers, or industry pages).
   - Scroll to the bottom of the page.
   - Verify that there is no duplicate "Connect" section right above the footer and the layout is clean.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Confirmed that the extra section has disappeared and styling is perfectly consistent.
