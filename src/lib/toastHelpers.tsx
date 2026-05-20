/**
 * Unified toast notification helpers.
 * Used by Contact.tsx and InlineBookingCalendar.tsx.
 *
 * Keeps all react-toastify config in one place so both forms
 * show identical notification UX.
 */
import React from 'react';
import { toast } from 'react-toastify';

const SHARED_OPTIONS = {
  position: 'top-right' as const,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

/**
 * Shows a structured success toast with a bold title and descriptive subtitle.
 */
export function showSuccessToast(title: string, description: string): void {
  toast.success(
    React.createElement(
      'div',
      null,
      React.createElement('div', { className: 'font-bold' }, title),
      React.createElement('div', { className: 'text-sm opacity-90' }, description)
    ),
    SHARED_OPTIONS
  );
}

/**
 * Shows a plain error toast.
 */
export function showErrorToast(message: string): void {
  toast.error(message, SHARED_OPTIONS);
}
