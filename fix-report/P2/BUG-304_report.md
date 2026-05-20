## Diagnosis

When users utilized browser autofill (e.g. Chrome, Safari, or Edge autofilling their name, email, or message), the input fields instantly turned white with dark text, violating the dark theme design system of the website.

## Root Cause

Browsers inject user-agent style rules (`-webkit-autofill`) which override standard Tailwind background styles with a bright default background color (often white or light yellow) and default font color.

## Fix

1. **Global Autofill Styles (`index.css`)**:
   - Added explicit overrides targeting all Webkit autofill states for `input` and `textarea` fields.
   - Enforced text fill color to remain white (`#ffffff !important`).
   - Replaced background color injection by using a deep inset box shadow (`0 0 0px 1000px #000000 inset !important`) to keep fields pitch black.
   - Declared a long transition delay on the background color state change (`transition: background-color 5000s ease-in-out 0s`) to prevent the browser from overriding the backdrop.

## Files Affected

- `src/index.css`

## Verification

1. **Manual Check**:
   - Navigate to the Contact page.
   - Type or select a saved contact autocomplete/autofill option in the Name/Email field.
   - Verify that fields stay pitch black with crisp white text, respecting the dark visual theme.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Overrides verified on modern Chromium autofill triggers.
