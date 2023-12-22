export const i18n = {
  defaultLocale: 'it',
  locales: ['it', 'en', 'bd','hi','ur'],
} as const

export type Locale = (typeof i18n)['locales'][number]
