## Diagnosis

In the "QA Isn't a Stage" section on the Home page, the mobile circular SDLC stages layout had small, cramped stage cards (`w-[4.5rem] h-[4.5rem]`). On mobile and iOS devices in Safari, the stage labels (such as "Requirements" or "Development") wrapped awkwardly, collided with the Lucide stage icons, or bled beyond the borders of the stage cards, breaking the clean circular aesthetic.

## Root Cause

The container cards wrapping each SDLC stage on mobile were styled with `w-[4.5rem] h-[4.5rem]` (72px), which did not provide enough horizontal or vertical breathing room for double-line or longer labels. Furthermore, the positioning offsets (`- 36px` center alignment) were hardcoded to match the 72px width, and the font size of `text-xs` (12px) with zero padding caused text to expand directly into the borders when rendered by Safari's text layout engine on iOS.

## Fix

1. **Updated `src/components/SDLCSection.tsx`**:
   - Expanded mobile stage cards size to `w-20 h-20` (80px), providing significantly more horizontal space.
   - Updated coordinate offsets for absolute positioning inside the circle: changed `- 36px` to `- 40px` (exactly half of 80px) to maintain a perfectly centered layout around the circular ring.
   - Reduced font size slightly to `text-[10px]` and added `p-1 text-center` padding to the label `<span>` element to prevent any overflow or text wrap clipping.

## Files Affected

- `src/components/SDLCSection.tsx`

## Verification

1. **Manual Check**:
   - Load the website Home page on a mobile device or responsive emulator.
   - Scroll to the "QA Isn't a Stage" circular diagram.
   - Confirm that all six stage boxes (Requirements, Design, Development, Testing, Deployment, Maintenance) are larger, fully centered on the ring, and display their labels completely enclosed inside the card boundaries with standard padding, without any text wrapping, bleeding, or overlapping icons.

> [!NOTE]
> **Verification Context:**
> - **Visual Balance:** The larger mobile boxes improve accessibility and legibility, ensuring that even under specific browser text rendering variations, the layout remains completely polished and readable.
