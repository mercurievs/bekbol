"use client";

import { motion } from "framer-motion";
import type { Feature } from "@/lib/data";

export function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="pattern-card rounded-3xl border border-felt-100 p-6 shadow-soft"
        >
            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{feature.tag}</p>
            <h3 className="mt-4 text-lg font-semibold text-felt-900">{feature.title}</h3>
            <p className="mt-3 text-sm text-felt-700">{feature.description}</p>
        </motion.div>
    );
}
