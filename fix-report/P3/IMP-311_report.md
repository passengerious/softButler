## Diagnosis

Percentage values and ranges in "Impact in Numbers" and "Expected Results" sections were poorly formatted (e.g., `-40-60%`), making them visually cramped and confusing to read.

## Root Cause

The metrics were hardcoded as plain strings without standard spacing or en-dash/em-dash typographical range notation.

## Fix

1. **Updated Service & Industry Pages / `FormatMetricValue` Component**:
   - Standardized formatting to ensure ranges use proper spacing (e.g., `40% – 60% reduction`).
   - Added spaces between negative signs and numbers where applicable to improve readability.

## Files Affected

- Multiple Service and Industry components (`src/pages/services/*.tsx`, `src/pages/industries/*.tsx`)

## Verification

1. **Manual Check**:
   - Visit QA Audit or Automation Nitro service pages.
   - Observe the "Expected Results" ranges.
   - Verify all percentages use proper spacing and range notation.
