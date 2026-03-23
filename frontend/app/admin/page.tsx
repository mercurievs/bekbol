import { SectionHeading } from "@/components/SectionHeading";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { AdminTable } from "@/components/admin/AdminTable";
import { useTranslations } from "next-intl";

const moderation = [
    { id: "P-102", title: "Калпак «Чолпон»", master: "Эрбол Бекмурза", status: "На проверке" },
    { id: "P-118", title: "Шырдак «Айкөл»", master: "Нурзат Төлөнова", status: "На проверке" }
];

const orders = [
    { id: "O-904", buyer: "Алина М.", total: "12 800 сом", status: "В пути" },
    { id: "O-915", buyer: "Бекзат С.", total: "4 500 сом", status: "Доставлен" }
];

const artisans = [
    { id: "A-11", name: "Айнагуль Жумабаева", region: "Иссык-Куль", status: "Активен" },
    { id: "A-18", name: "Нурзат Төлөнова", region: "Нарын", status: "Активен" }
];

export default function AdminPage() {
    const t = useTranslations("admin");

    return (
        <div className="container-base py-16">
            <SectionHeading eyebrow={t("title")} title={t("dashboard")} subtitle={t("subtitle")} />

            <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
                <AdminSidebar />

                <div className="space-y-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <AdminStatCard label="Активные мастера" value="124" trend="+8 за месяц" />
                        <AdminStatCard label="Новые товары" value="56" trend="+14 за неделю" />
                        <AdminStatCard label="Заказы" value="312" trend="+12%" />
                    </div>

                    <AdminTable
                        title={t("moderation")}
                        columns={[
                            { label: "ID", key: "id" },
                            { label: t("products"), key: "title" },
                            { label: t("masters"), key: "master" },
                            { label: t("status"), key: "status" }
                        ]}
                        rows={moderation}
                        actionLabel={t("approve")}
                        searchPlaceholder={t("search")}
                        filtersLabel={t("filters")}
                    />

                    <AdminTable
                        title={t("orders")}
                        columns={[
                            { label: "ID", key: "id" },
                            { label: "Покупатель", key: "buyer" },
                            { label: "Сумма", key: "total" },
                            { label: t("status"), key: "status" }
                        ]}
                        rows={orders}
                        actionLabel="Обновить"
                        searchPlaceholder={t("search")}
                        filtersLabel={t("filters")}
                    />

                    <AdminTable
                        title={t("masters")}
                        columns={[
                            { label: "ID", key: "id" },
                            { label: "Имя", key: "name" },
                            { label: "Регион", key: "region" },
                            { label: t("status"), key: "status" }
                        ]}
                        rows={artisans}
                        actionLabel={t("reviews")}
                        searchPlaceholder={t("search")}
                        filtersLabel={t("filters")}
                    />
                </div>
            </div>
        </div>
    );
}
