import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale } from "./lib/i18n";

export default getRequestConfig(async () => {
    const cookieStore = cookies();
    const localeCookie = cookieStore.get("bekbol_locale")?.value ?? defaultLocale;
    const locale = isLocale(localeCookie) ? localeCookie : defaultLocale;

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
