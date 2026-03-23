import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("about");

    return (
        <div className="container-base py-16">
            <SectionHeading
                eyebrow={t("eyebrow")}
                title={t("title")}
                subtitle={t("subtitle")}
            />
            <div className="mt-10 rounded-3xl border border-felt-100 bg-white p-8 shadow-soft">
                <p className="text-base text-felt-700">
                    Bekbol создан как культурный и коммерческий проект, который помогает мастерам находить
                    покупателей, а покупателям — находить подлинные изделия с историей. Мы готовим платформу
                    к международным рынкам и поддерживаем локальные сообщества.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("mission")}</p>
                        <p className="mt-2 text-sm text-felt-800">{t("missionText")}</p>
                    </div>
                    <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("values")}</p>
                        <p className="mt-2 text-sm text-felt-800">{t("valuesText")}</p>
                    </div>
                    <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{t("scale")}</p>
                        <p className="mt-2 text-sm text-felt-800">{t("scaleText")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
