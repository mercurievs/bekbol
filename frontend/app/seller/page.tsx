import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

const products = [
    { title: "Войлочная сумка", status: "На модерации" },
    { title: "Шырдак «Арстан»", status: "Опубликован" }
];

export default function SellerPage() {
    const t = useTranslations("seller");

    return (
        <div className="container-base py-16">
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("myProducts")}</p>
                    <div className="mt-4 space-y-4">
                        {products.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                                <div className="flex items-center justify-between text-sm text-felt-800">
                                    <span>{item.title}</span>
                                    <span className="text-xs text-felt-500">{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("addProduct")}</p>
                    <div className="mt-4 space-y-3">
                        <input className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm" placeholder={t("name")} />
                        <input className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm" placeholder={t("price")} />
                        <input className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm" placeholder={t("category")} />
                        <button className="w-full rounded-full bg-felt-800 py-3 text-xs uppercase tracking-widest text-felt-50">
                            {t("save")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
