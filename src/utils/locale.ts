type Locale = string; // You can also use a more specific type like 'en' | 'es' | 'fr'

export const setLocale = (locale: Locale): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
};

export const getLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'et'; // Replace 'defaultLocale' with your default locale
  }
  return 'et'; // Fallback for server-side
};
