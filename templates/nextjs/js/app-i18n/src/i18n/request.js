import { getRequestConfig } from "next-intl/server";
import {  routing } from "./routing.js";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../../public/locales/${locale}.json`))
      .default,
  };
});
