import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

const orders = [
    { id: "BK-1203", status: "В пути", amount: "12 800 сом" },
    { id: "BK-1184", status: "Доставлен", amount: "4 500 сом" }
];

export default function AccountPage() {
    const t = useTranslations("account");

    return (
        <div className="container-base py-16">
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("orders")}</p>
                    <div className="mt-4 space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                                <div className="flex items-center justify-between text-sm text-felt-800">
                                    <span>{order.id}</span>
                                    <span>{order.amount}</span>
                                </div>
                                <p className="mt-2 text-xs text-felt-500">Статус: {order.status}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("favorites")}</p>
                    <p className="mt-4 text-sm text-felt-700">Сохраняйте изделия и следите за новинками.</p>
                    <button className="mt-6 rounded-full border border-felt-200 px-5 py-2 text-xs uppercase tracking-widest text-felt-700">
                        {t("goCatalog")}
                    </button>
                </div>
            </div>
        </div>
    );
}
