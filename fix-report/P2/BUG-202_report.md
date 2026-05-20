## Diagnosis

The "How we apply QA..." section of the EdTech industry page (`EdTech.tsx`) used an inconsistent, basic blockquote styling (`border-l-4 border-[#00B476] bg-gradient-to-r from-[#00B476]/10 to-transparent`) compared to the high-end glass-mesh gradient card layout used on Ecommerce and Logistics pages.

## Root Cause

An older quote block styling was left in place during initial template copy-pasting, leading to inconsistency in quote card aesthetics across the different industry verticals.

## Fix

1. **Updated blockquote in `src/pages/industries/EdTech.tsx`**:
   - Swapped the simple border-l block for the sleek, premium glass-mesh gradient card style (`mt-12 bg-gradient-to-r from-black via-green-950/15 to-black rounded-xl p-8 text-center`).
   - Standardized the text class to `#00B476` with a semi-bold, leading-relaxed font scale to harmonize it globally with the Ecommerce and Logistics pages.

## Files Affected

- `src/pages/industries/EdTech.tsx`

## Verification

1. **Manual Check**:
   - Open the `/industries/edtech` page.
   - Scroll down to the "How we apply QA..." section.
   - Verify that the bottom quote card features a premium gradient container spanning the full width of the section, with centered text reading "QA protects learning flows, not just features." in `#00B476` green, identical to the quote aesthetic in Ecommerce and Logistics.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Confirmed the EdTech quote card looks extremely premium and matches the rest of the site beautifully.
