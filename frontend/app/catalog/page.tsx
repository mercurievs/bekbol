import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { featuredProducts } from "@/lib/data";
import { useTranslations } from "next-intl";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CatalogPage() {
    const t = useTranslations("catalog");
    const filters = [
        { label: t("filters.category"), value: "Шырдаки" },
        { label: t("filters.material"), value: "Войлок" },
        { label: t("filters.price"), value: "до 10 000 сом" },
        { label: t("filters.handmade"), value: "Да" }
    ];

    return (
        <div className="container-base py-16">
            <Breadcrumbs
                items={[
                    { label: t("breadcrumbs.home"), href: "/" },
                    { label: t("breadcrumbs.catalog") }
                ]}
            />
            <SectionHeading
                eyebrow={t("eyebrow")}
                title={t("title")}
                subtitle={t("subtitle")}
            />
            <div className="mt-10 grid gap-4 rounded-3xl border border-felt-100 bg-white/80 p-6 md:grid-cols-2 lg:grid-cols-4">
                {filters.map((filter) => (
                    <div key={filter.label} className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{filter.label}</p>
                        <p className="mt-2 text-sm text-felt-800">{filter.value}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={`skeleton-${index}`}
                        className="animate-pulse rounded-3xl border border-felt-100 bg-white p-6 shadow-soft"
                    >
                        <div className="h-4 w-24 rounded-full bg-felt-100" />
                        <div className="mt-5 h-4 w-40 rounded-full bg-felt-100" />
                        <div className="mt-3 h-3 w-full rounded-full bg-felt-100" />
                        <div className="mt-6 flex items-center justify-between">
                            <div className="h-8 w-20 rounded-full bg-felt-100" />
                            <div className="h-8 w-28 rounded-full bg-felt-100" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
