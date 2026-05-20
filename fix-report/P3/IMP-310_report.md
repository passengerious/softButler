## Diagnosis

The FAQ section on the Home page featured continuous or distracting animations that made it difficult for users to focus on and read the text content.

## Root Cause

Framer Motion triggers on the FAQ elements were set to run continuously or loop, causing distracting visual movement while reading.

## Fix

1. **Updated `src/components/FAQ.tsx`**:
   - Reduced animation intensity and constrained triggers using `viewport={{ once: true }}`.
   - Softened entrance transitions to subtle fade-ins.

## Files Affected

- `src/components/FAQ.tsx`

## Verification

1. **Manual Check**:
   - Scroll to the FAQ section on the Home page.
   - Verify the animations only fire once upon entry and remain stable for reading.
