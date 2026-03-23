"use client";

import { useTranslations } from "next-intl";

const items = [
    { key: "dashboard" },
    { key: "masters" },
    { key: "products" },
    { key: "orders" },
    { key: "categories" },
    { key: "reviews" },
    { key: "settings" }
];

export function AdminSidebar() {
    const t = useTranslations("admin");

    return (
        <aside className="sticky top-20 h-fit rounded-3xl border border-felt-100 bg-white/80 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("title")}</p>
            <nav className="mt-6 space-y-2 text-sm text-felt-700">
                {items.map((item) => (
                    <button
                        key={item.key}
                        className="flex w-full items-center justify-between rounded-2xl border border-felt-100 px-4 py-3 transition hover:border-felt-300 hover:text-felt-900"
                        type="button"
                    >
                        <span>{t(item.key)}</span>
                        <span className="text-xs text-felt-400">/</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}
