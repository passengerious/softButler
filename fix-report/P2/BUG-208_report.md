## Diagnosis

The infinite scrolling logo ribbon on the Home and Who We Are pages broke or halted abruptly during loops, causing noticeable gaps and stuttering on macOS/iOS Safari and other browsers.

## Root Cause

The scrolling track contains two identical child lists (`.logo-marquee-group`) side-by-side inside `.logo-marquee-track`. While each item in a group is separated by a 3rem gap using standard Tailwind or CSS grid/flex spacing, there was no gap or trailing padding at the end of each group.
Consequently, when the track shifted by `translateX(-50%)` to start the next loop iteration, the first logo in the second group collided or aligned abruptly without spacing, breaking the visual geometry. Additionally, lack of `flex-shrink: 0` could cause flex items to shrink, throwing off the animation distance calculations.

## Fix

1. **Updated `src/index.css`**:
   - Added `padding-right: 3rem;` to `.logo-marquee-group` to guarantee that the space between the last logo of the first group and the first logo of the second group matches the internal 3rem gap.
   - Added `flex-shrink: 0;` to `.logo-marquee-group` to ensure the dimensions are always calculated reliably and the scrolling is 100% stable.

## Files Affected

- `src/index.css`

## Verification

1. **Manual Check**:
   - Open the Home page or Who We Are page.
   - Observe the horizontal logo scroll animations.
   - Confirm that the ribbon flows continuously in both directions without structural jumps, gaps, or halts on both desktop and mobile/Retina devices.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** All loop states are seamlessly validated and run continuously.
