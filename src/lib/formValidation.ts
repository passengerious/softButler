/**
 * Shared form validation utilities.
 * Used by Contact.tsx and InlineBookingCalendar.tsx.
 */

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Validates a contact / booking form submission.
 * Returns the first validation error message, or null when data is valid.
 */
export function validateContactForm(data: ContactFormData): string | null {
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) return 'Please enter your name.';
  if (name.length > 100) return 'Name must be 100 characters or less.';
  if (!email || !EMAIL_REGEX.test(email))
    return 'Please enter a valid email address (e.g. you@example.com).';
  if (!message) return 'Please tell us about your challenges.';

  return null;
}
