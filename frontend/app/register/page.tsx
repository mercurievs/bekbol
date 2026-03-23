"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegisterPage() {
    const t = useTranslations("register");
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "buyer"
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email,
                    full_name: form.fullName,
                    role: form.role,
                    password: form.password
                })
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data?.detail ?? "Ошибка регистрации");
            }

            setStatus("success");
            setMessage(t("success"));
            setForm({ fullName: "", email: "", password: "", role: "buyer" });
        } catch (error) {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : t("error"));
        }
    };

    return (
        <div className="container-base py-16">
            <div className="mx-auto max-w-md rounded-3xl border border-felt-100 bg-white p-8 shadow-soft">
                <h1 className="text-2xl font-semibold text-felt-900">{t("title")}</h1>
                <p className="mt-2 text-sm text-felt-600">{t("subtitle")}</p>
                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                    <input
                        className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm"
                        placeholder={t("name")}
                        value={form.fullName}
                        onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                        required
                    />
                    <input
                        className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm"
                        placeholder={t("email")}
                        type="email"
                        value={form.email}
                        onChange={(event) => setForm({ ...form, email: event.target.value })}
                        required
                    />
                    <input
                        className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm"
                        placeholder={t("password")}
                        type="password"
                        value={form.password}
                        onChange={(event) => setForm({ ...form, password: event.target.value })}
                        required
                    />
                    <select
                        className="w-full rounded-2xl border border-felt-200 px-4 py-3 text-sm"
                        value={form.role}
                        onChange={(event) => setForm({ ...form, role: event.target.value })}
                    >
                        <option value="buyer">{t("roleBuyer")}</option>
                        <option value="artisan">{t("roleSeller")}</option>
                    </select>
                    <button
                        className="w-full rounded-full bg-felt-800 py-3 text-xs uppercase tracking-widest text-felt-50"
                        type="submit"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? t("loading") : t("submit")}
                    </button>
                    {message && (
                        <p
                            className={`rounded-2xl border px-4 py-3 text-sm ${status === "success"
                                ? "border-steppe-300 bg-steppe-50 text-steppe-700"
                                : "border-felt-200 bg-felt-50 text-felt-700"
                                }`}
                        >
                            {message}
                        </p>
                    )}
                    <Link className="block text-center text-xs uppercase tracking-widest text-felt-600" href="/login">
                        {t("haveAccount")}
                    </Link>
                </form>
            </div>
        </div>
    );
}
