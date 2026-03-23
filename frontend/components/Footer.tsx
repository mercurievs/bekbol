"use client";

import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="border-t border-felt-100 bg-felt-50">
            <div className="container-base flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-felt-500">Bekbol</p>
                    <p className="mt-2 text-sm text-felt-700">{t("tagline")}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-felt-600">
                    <span>{t("location")}</span>
                    <span>support@bekbol.kg</span>
                </div>
            </div>
        </footer>
    );
}
