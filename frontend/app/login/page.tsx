import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LoginPage() {
    const t = useTranslations("login");

    return (
        <div className="container-base py-16">
            <div className="mx-auto max-w-md rounded-3xl border border-felt-100 bg-white p-8 shadow-soft">
                <h1 className="text-2xl font-semibold text-felt-900">{t("title")}</h1>
                <p className="mt-2 text-sm text-felt-600">{t("subtitle")}</p>
                <div className="mt-6 space-y-4">
                    <input
                        className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm"
                        placeholder={t("email")}
                    />
                    <input
                        className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm"
                        placeholder={t("password")}
                        type="password"
                    />
                    <button className="w-full rounded-full bg-felt-800 py-3 text-xs uppercase tracking-widest text-felt-50">
                        {t("submit")}
                    </button>
                    <Link className="block text-center text-xs uppercase tracking-widest text-felt-600" href="/register">
                        {t("register")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
