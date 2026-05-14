## Diagnosis

In landscape orientation on mobile devices, the mobile menu items (especially within expanded dropdowns like "Industries") were partially cut off. The menu was set to `overflow-hidden`, preventing users from scrolling down to access the hidden items.

## Root Cause

The mobile menu container (`motion.div`) had `overflow-hidden` applied and lacked a defined maximum height. This caused it to expand beyond the viewport height in landscape mode without providing a scrolling mechanism. Additionally, the `top` offset was inconsistently set to `top-16` while the navbar height was `h-20`.

## Fix

1. **Updated `Navbar.tsx`**:
   - Changed the mobile menu container class from `overflow-hidden` to `overflow-y-auto` to enable vertical scrolling.
   - Added `max-h-[calc(100vh-5rem)]` (100vh minus the 80px/5rem navbar height) to ensure the menu stays within the viewport.
   - Corrected the `top` offset from `top-16` to `top-20` to align perfectly with the bottom of the navbar.

## Files Affected

- `src/components/Navbar.tsx`

## Verification

1. **Manual Check**:
   - Open the website on a mobile device or using browser dev tools in mobile/landscape mode.
   - Open the menu and expand the "Industries" section.
   - Verify that the menu is scrollable and all links are accessible.

> [!NOTE]
> **Verification Context:**
> - **Localhost:** Vertical scrolling and max-height constraints can be 100% verified locally using browser dev tools (responsive mode) or a physical mobile device on the local network.
> - **Production Host:** No specific host-only verification required.
