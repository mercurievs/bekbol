"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type HeroProps = {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
};

export function Hero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
    return (
        <section className="ornament-surface relative overflow-hidden bg-felt-100">
            <div className="container-base grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xs uppercase tracking-[0.35em] text-felt-600"
                    >
                        {eyebrow}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 text-4xl font-semibold text-felt-900 md:text-5xl"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 max-w-xl text-base text-felt-700"
                    >
                        {description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Link
                            className="rounded-full bg-felt-800 px-6 py-3 text-xs uppercase tracking-widest text-felt-50 shadow-lift transition hover:bg-felt-700"
                            href="/catalog"
                        >
                            {primaryCta}
                        </Link>
                        <Link
                            className="rounded-full border border-felt-300 px-6 py-3 text-xs uppercase tracking-widest text-felt-700 transition hover:border-felt-400 hover:text-felt-900"
                            href="/masters"
                        >
                            {secondaryCta}
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative rounded-3xl border border-felt-200 bg-white/70 p-8 shadow-soft"
                >
                    <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-steppe-100 blur-2xl" />
                    <div className="absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-felt-200 blur-3xl" />
                    <div className="relative space-y-6">
                        <div className="rounded-2xl bg-felt-800 px-5 py-4 text-felt-50">
                            <p className="text-xs uppercase tracking-[0.3em] text-felt-200">Коллекция</p>
                            <p className="mt-3 text-lg">Шырдаки и ала-кийиз</p>
                            <p className="mt-2 text-sm text-felt-200">Тепло, ручная работа и истории семей.</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-felt-500">Материал</p>
                                <p className="mt-2 text-sm text-felt-800">Войлок · Шерсть</p>
                            </div>
                            <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-felt-500">Мастер</p>
                                <p className="mt-2 text-sm text-felt-800">Айнагуль Жумабаева</p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-felt-200 bg-felt-50 px-4 py-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">Поддержка</p>
                            <p className="mt-2 text-sm text-felt-800">Каждая покупка поддерживает локальные семьи.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
