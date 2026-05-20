## Diagnosis

The "Who We Are" page suffered from two visual/ux polish issues:
1. **Journey Path Artifacts:** Extraneous static small green line segments appeared near the timeline milestones before the dynamic animated scroll-driven line reached them, causing visual stuttering and premature completion.
2. **Typography Spacing:** The quote "We don't follow trends—we set them" in the "Trendsetter Mindset" core values card was missing clean, standard spacing around the em-dash.

## Root Cause

1. In `src/pages/WhoWeAre.tsx`, the timeline component rendered small static connector div elements (`className="absolute left-8 ... bg-green-500 opacity-50"`) for every milestone item in parallel to the main dynamically scroll-filled line, creating redundant line segments that rendered before the animation reached them.
2. The copy for "Trendsetter Mindset" rendered `"We don&apos;t follow trends—we set them"` without spaces flanking the em-dash.

## Fix

1. **Updated `src/pages/WhoWeAre.tsx`**:
   - Removed the connecting line segment JSX rendering block (previously lines 234-237). This leaves the scroll-driven dynamic progress line as the sole vertical indicator, completely resolving the visual line bleeding and stuttering artifacts.
   - Refactored the copy to `"We don&apos;t follow trends — we set them"` (adding clean spaces before and after the em-dash) for perfect, standard premium typography.

## Files Affected

- `src/pages/WhoWeAre.tsx`

## Verification

1. **Manual Check**:
   - Navigate to `/who-we-are`.
   - Scroll slowly through the "Our Journey" section. Confirm that the vertical timeline line fills up perfectly and matches the scroll progress smoothly, without any premature green line pieces showing up ahead of it.
   - Scroll down to the "Our Core Values" section. Confirm that the "Trendsetter Mindset" value card displays the quote with beautifully spaced em-dashes: `"We don't follow trends — we set them"`.

> [!NOTE]
> **Verification Context:**
> - **Visual Consistency:** The journey path is now incredibly smooth, dynamic, and free of redundant static visual noise.
