"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CTAProps = {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
};

export function CTA({ eyebrow, title, description, primary, secondary }: CTAProps) {
    return (
        <section className="container-base mt-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-3xl border border-felt-100 bg-felt-800 px-8 py-12 text-felt-50 shadow-lift"
            >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-steppe-500/30 blur-3xl" />
                <div className="relative max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-felt-200">{eyebrow}</p>
                    <h3 className="mt-4 text-3xl font-semibold">{title}</h3>
                    <p className="mt-4 text-base text-felt-100">{description}</p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            className="rounded-full bg-felt-50 px-6 py-3 text-xs uppercase tracking-widest text-felt-900"
                            href="/seller"
                        >
                            {primary}
                        </Link>
                        <Link
                            className="rounded-full border border-felt-200/40 px-6 py-3 text-xs uppercase tracking-widest text-felt-50"
                            href="/about"
                        >
                            {secondary}
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
