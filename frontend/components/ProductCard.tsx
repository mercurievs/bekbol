"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { FeaturedProduct } from "@/lib/data";
import { useStore } from "@/lib/store";

export function ProductCard({ item }: { item: FeaturedProduct }) {
    const { toggleFavorite, isFavorite } = useStore();
    const favorite = isFavorite(item.id);

    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-felt-100 bg-white p-6 shadow-soft"
        >
            <div className="flex items-center justify-between">
                <span className="rounded-full bg-felt-100 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-felt-600">
                    {item.category}
                </span>
                <span className="text-sm text-felt-600">{item.price}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-felt-900">{item.title}</h3>
            <p className="mt-3 text-sm text-felt-700">{item.description}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-felt-500">
                <span>{item.master}</span>
                <span>{item.location}</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <Link
                    className="text-xs uppercase tracking-widest text-felt-700 transition group-hover:text-felt-900"
                    href={`/products/${item.id}`}
                >
                    Смотреть
                </Link>
                <button
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition ${favorite
                            ? "border-felt-700 bg-felt-800 text-felt-50"
                            : "border-felt-200 text-felt-600 hover:border-felt-400 hover:text-felt-900"
                        }`}
                    type="button"
                    onClick={() => toggleFavorite(item.id)}
                >
                    {favorite ? "В избранном" : "В избранное"}
                </button>
            </div>
        </motion.article>
    );
}
