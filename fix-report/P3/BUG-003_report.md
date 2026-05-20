## Diagnosis

The QA Candidate Assessment service page was missing critical components compared to other service pages (like Release Acceleration and QA Audit):
1. A structured 5-step roadmap visualization representing the candidate assessment process flow.
2. An Expected Results metrics table showing candidate evaluation statistics and improvements.
3. The bottom Call-to-Action (CTA) block needed to be fully polished and consistent with the styling and layout of `ReleaseAcceleration.tsx`.

## Root Cause

`QACandidateAssessment.tsx` was originally designed as a simpler, less detailed service page, lacking the standard roadmap section, expected results table, and custom imports for roadmap visualization.

## Fix

1. **Updated `src/pages/services/QACandidateAssessment.tsx`**:
   - Imported required Lucide-react icons: `Search`, `Settings`, and `Users`.
   - Added a new `processSteps` array outlining the 5-step candidate evaluation process (Requirement Alignment, Task Setup, Active Evaluation, Report Generation, Hiring Decision Consultation).
   - Added an interactive "Our Process" timeline visualization section using a gradient vertical timeline and z-index-safe numbered icons (`z-10 bg-black` stacking over the line) to prevent line bleeding.
   - Added a `results` array containing metrics (Wrong Hire Risk, Hiring Confidence, Fewer Re-hires).
   - Added a Safari-compliant "Expected Results" table section that places `border-b` styling directly on the `td` and `th` elements to prevent Safari rendering/highlighting bugs.
   - Formatted the metrics percentages in both `metrics` and `results` arrays to be clearly spaced (e.g., `– 50% – 70%` instead of `–50–70%`).

## Files Affected

- `src/pages/services/QACandidateAssessment.tsx`

## Verification

1. **Manual Check**:
   - Navigate to `/services/QACandidateAssessment`.
   - Scroll down to verify the "Our Process" section with the 5 steps and sharp, clean green numbered timeline circles.
   - Confirm that the "Expected Results" table renders correctly and matches the formatting of the other pages.
   - Verify that all percentage ranges have spacing around values and en/em-dashes (`– 50% – 70%`).

> [!NOTE]
> **Verification Context:**
> - **Production Build Readiness:** All components compile without any issues or regressions.
