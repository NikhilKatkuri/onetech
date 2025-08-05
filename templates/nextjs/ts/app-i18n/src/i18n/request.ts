import { getRequestConfig } from "next-intl/server";
import { locale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as locale)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../public/locales/${locale}.json`))
      .default,
  };
});
