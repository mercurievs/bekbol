"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "next-intl";

const links = [
    { key: "home", href: "/" },
    { key: "catalog", href: "/catalog" },
    { key: "masters", href: "/masters" },
    { key: "about", href: "/about" }
];

export function Navbar() {
    const t = useTranslations("nav");
    const locale = useLocale();

    return (
        <motion.header
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-40 border-b border-felt-100/80 bg-felt-50/80 backdrop-blur"
        >
            <div className="container-base flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-felt-200 text-lg font-semibold text-felt-900">
                        Б
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-felt-500">Bekbol</p>
                        <p className="text-xs text-felt-700">{t("brandSubtitle")}</p>
                    </div>
                </Link>
                <nav className="hidden items-center gap-6 text-sm text-felt-700 md:flex">
                    {links.map((link) => (
                        <Link key={link.key} className="transition hover:text-felt-900" href={link.href}>
                            {t(link.key)}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <LanguageSwitcher currentLocale={locale as "ru" | "kg"} />
                    <Link
                        className="hidden rounded-full border border-felt-200 px-4 py-2 text-xs uppercase tracking-widest text-felt-600 transition hover:border-felt-400 hover:text-felt-900 md:inline-flex"
                        href="/account"
                    >
                        {t("profile")}
                    </Link>
                    <Link
                        className="rounded-full border border-felt-200 px-4 py-2 text-xs uppercase tracking-widest text-felt-700 transition hover:border-felt-400 hover:text-felt-900"
                        href="/login"
                    >
                        {t("login")}
                    </Link>
                    <button className="rounded-full bg-felt-800 px-4 py-2 text-xs uppercase tracking-widest text-felt-50 shadow-soft transition hover:bg-felt-700">
                        {t("becomeMaster")}
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
