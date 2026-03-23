import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

const masters = [
    {
        name: "Айнагуль Жумабаева",
        craft: "Войлочные изделия",
        region: "Иссык-Куль",
        story: "Сохраняет семейную технику валяния войлока более 20 лет."
    },
    {
        name: "Нурзат Төлөнова",
        craft: "Шырдаки и ала-кийиз",
        region: "Нарын",
        story: "Создаёт орнаменты по мотивам горных легенд."
    }
];

export default function MastersPage() {
    const t = useTranslations("masters");

    return (
        <div className="container-base py-16">
            <SectionHeading
                eyebrow={t("eyebrow")}
                title={t("title")}
                subtitle={t("subtitle")}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {masters.map((master) => (
                    <div key={master.name} className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
                        <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{master.region}</p>
                        <h3 className="mt-4 text-lg font-semibold text-felt-900">{master.name}</h3>
                        <p className="mt-2 text-sm text-felt-700">{master.craft}</p>
                        <p className="mt-4 text-sm text-felt-600">{master.story}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
