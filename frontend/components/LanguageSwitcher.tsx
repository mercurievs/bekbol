"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { locales, type AppLocale } from "@/lib/i18n";

const labels: Record<AppLocale, string> = {
    ru: "RU",
    kg: "KG"
};

export function LanguageSwitcher({ currentLocale }: { currentLocale: AppLocale }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const onChange = (locale: AppLocale) => {
        document.cookie = `bekbol_locale=${locale}; path=/; max-age=31536000`;
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <div className="flex items-center gap-1 rounded-full border border-felt-200 bg-felt-50 p-1 text-xs">
            {locales.map((locale) => (
                <button
                    key={locale}
                    type="button"
                    onClick={() => onChange(locale)}
                    className={`rounded-full px-3 py-1 transition ${currentLocale === locale
                            ? "bg-felt-800 text-felt-50"
                            : "text-felt-600 hover:text-felt-900"
                        }`}
                    aria-pressed={currentLocale === locale}
                    disabled={isPending}
                >
                    {labels[locale]}
                </button>
            ))}
        </div>
    );
}
