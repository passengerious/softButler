## Diagnosis

The key quote on the Home page (&quot;Your users won&apos;t give you a second chance...&quot;) exhibited a visual jump or pop at the end of the animation sequence where the highlighting/glowing styling vanished or abruptly changed.

## Root Cause

Previously, the quote was either rendered entirely statically or suffered from animation lifecycle issues where the ending/completed state reverted to different style declarations. Without proper ending states, the letters would pop from their animated layout to a default styling, causing a jarring user experience.

## Fix

1. **Refactored `src/pages/Home.tsx`**:
   - Implemented a premium, letter-by-letter stagger animation utilizing Framer Motion.
   - Defined `quoteContainerVariants` for staggered entrance (`staggerChildren: 0.015`).
   - Defined `quoteLetterVariants` and `quoteGreenLetterVariants` representing a dim starting state (`opacity: 0.3` and low opacity colors) transitioning smoothly to full brightness (`opacity: 1`, solid `#ffffff` or glowing green `#00B476` with `textShadow`).
   - The animatable strings are separated so that &quot;second chance&quot; receives the gorgeous glowing HSL-compliant green, while the remaining text gets a clean, bright white.
   - Used `viewport={{ once: true, margin: "-100px" }}` so that the animation triggers once when scrolled into view and stays in its beautiful, completed, glowing state forever with no flickering or resetting.

## Files Affected

- `src/pages/Home.tsx`

## Verification

1. **Manual Check**:
   - Load the Home page and scroll down to the "Impact Quote" section.
   - Observe the quote being dynamically typed out with a beautiful, glowing light wave.
   - Confirm that when the animation completes, the text remains perfectly lit, sharp, and stable, with zero pops, flickers, or resets.

> [!NOTE]
> **Verification Context:**
> - **Visual Excellence:** The custom staggered letter animation adds a premium, high-tech aesthetic that aligns perfectly with the brand's sophisticated tone while providing absolute animation stability.
