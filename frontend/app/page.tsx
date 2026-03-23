import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { features, featuredProducts } from "@/lib/data";
import { FeatureCard } from "@/components/FeatureCard";
import { CTA } from "@/components/CTA";
import { useTranslations } from "next-intl";

export default function HomePage() {
    const t = useTranslations("home");

    return (
        <div>
            <Hero
                eyebrow={t("eyebrow")}
                title={t("title")}
                description={t("description")}
                primaryCta={t("primaryCta")}
                secondaryCta={t("secondaryCta")}
            />

            <section className="container-base mt-16">
                <SectionHeading
                    eyebrow={t("featuredEyebrow")}
                    title={t("featuredTitle")}
                    subtitle={t("featuredSubtitle")}
                />
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            <section className="container-base mt-20">
                <SectionHeading
                    eyebrow={t("featuresEyebrow")}
                    title={t("featuresTitle")}
                    subtitle={t("featuresSubtitle")}
                />
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} feature={feature} />
                    ))}
                </div>
            </section>

            <CTA
                eyebrow={t("ctaEyebrow")}
                title={t("ctaTitle")}
                description={t("ctaDescription")}
                primary={t("ctaPrimary")}
                secondary={t("ctaSecondary")}
            />
        </div>
    );
}
