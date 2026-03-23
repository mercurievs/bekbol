"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useTranslations } from "next-intl";
import { useStore } from "@/lib/store";

const story = {
    id: "shyrdak-01",
    title: "Шырдак «Айкөл»",
    master: "Нурзат Төлөнова",
    village: "Нарын, Кочкор",
    material: "Войлок, натуральная шерсть",
    price: "28 000 сом",
    description:
        "Каждый узор символизирует семейное благополучие и защиту. На создание ушло 18 дней ручной работы.",
    delivery: "Доставка по Кыргызстану и СНГ."
};

export default function ProductDetailsPage() {
    const t = useTranslations("product");
    const { addToCart, removeFromCart, isInCart, toggleFavorite, isFavorite } = useStore();
    const inCart = isInCart(story.id);
    const favorite = isFavorite(story.id);

    return (
        <div className="container-base py-16">
            <Breadcrumbs
                items={[
                    { label: t("breadcrumbs.home"), href: "/" },
                    { label: t("breadcrumbs.catalog"), href: "/catalog" },
                    { label: t("breadcrumbs.product") }
                ]}
            />
            <SectionHeading
                eyebrow={t("eyebrow")}
                title={story.title}
                subtitle={t("subtitle")}
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-felt-100 bg-white p-8 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("history")}</p>
                    <p className="mt-4 text-base text-felt-700">{story.description}</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("master")}</p>
                            <p className="mt-2 text-sm text-felt-800">{story.master}</p>
                        </div>
                        <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("location")}</p>
                            <p className="mt-2 text-sm text-felt-800">{story.village}</p>
                        </div>
                        <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("material")}</p>
                            <p className="mt-2 text-sm text-felt-800">{story.material}</p>
                        </div>
                        <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("delivery")}</p>
                            <p className="mt-2 text-sm text-felt-800">{story.delivery}</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl border border-felt-100 bg-white p-8 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("price")}</p>
                    <p className="mt-4 text-3xl font-semibold text-felt-900">{story.price}</p>
                    <div className="mt-6 space-y-4 text-sm text-felt-700">
                        <p>{t("payNote")}</p>
                        <p>{t("payNote2")}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <button
                            className="rounded-full bg-felt-800 px-6 py-3 text-xs uppercase tracking-widest text-felt-50 shadow-soft"
                            type="button"
                            onClick={() => (inCart ? removeFromCart(story.id) : addToCart(story.id))}
                        >
                            {inCart ? "Удалить из корзины" : t("addToCart")}
                        </button>
                        <button
                            className={`rounded-full border px-6 py-3 text-xs uppercase tracking-widest ${favorite
                                    ? "border-felt-700 bg-felt-800 text-felt-50"
                                    : "border-felt-200 text-felt-700"
                                }`}
                            type="button"
                            onClick={() => toggleFavorite(story.id)}
                        >
                            {favorite ? "В избранном" : t("favorite")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
