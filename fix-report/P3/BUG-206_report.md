## Diagnosis

Across several service pages (Release Acceleration, QA Audit, Automation Nitro, QA Candidate Assessment), a vertical connecting line runs through the timeline process milestones. In some views, the line was visible through the step circles, creating a visual overlay glitch that looked unpolished.

## Root Cause

In `src/pages/services/AutomationNitro.tsx`, the vertical connecting line element did not have an explicit `z-index` configuration (`z-0`), allowing it to overlay or blend improperly with the step circles despite the circle container having `z-10`. Other service files had correct `z-0` positioning on the line but needed to be double-checked to ensure correct rendering.

## Fix

1. **Updated `src/pages/services/AutomationNitro.tsx`**:
   - Added `z-0` class explicitly to the timeline's absolute vertical line:
     ```tsx
     <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00B476] via-[#00B476] to-transparent hidden md:block z-0"></div>
     ```
   - Verified that the step circles in all 4 key service files (`ReleaseAcceleration.tsx`, `QAAudit.tsx`, `AutomationNitro.tsx`, and `QACandidateAssessment.tsx`) are correctly layered using `z-10 bg-black` (or solid backgrounds) to perfectly mask the line beneath them.

## Files Affected

- `src/pages/services/AutomationNitro.tsx`

## Verification

1. **Manual Check**:
   - Navigate to `/services/automation-nitro` (or the respective service page).
   - Scroll down to the "Our Process" roadmap.
   - Confirm that the vertical connecting line is completely masked and hidden behind the numbered step circles instead of crossing through their numbers.

> [!NOTE]
> **Verification Context:**
> - **Visual Polish:** The roadmap connecting lines now cleanly terminate at the boundaries of the step circles, giving the UI a sharp, premium, and layered appearance.
