import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { PageTransition } from "@/components/PageTransition";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
    title: "Bekbol — Кыргызские ремёсла",
    description: "Маркетплейс кыргызских изделий, мастеров и национальной культуры."
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const localeCookie = cookieStore.get("bekbol_locale")?.value ?? defaultLocale;
    const locale = isLocale(localeCookie) ? localeCookie : defaultLocale;
    const messages = (await import(`../messages/${locale}.json`)).default;

    return (
        <html lang={locale}>
            <body className="min-h-screen">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <StoreProvider>
                        <Navbar />
                        <PageTransition>
                            <main className="pb-24">{children}</main>
                        </PageTransition>
                        <Footer />
                    </StoreProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
