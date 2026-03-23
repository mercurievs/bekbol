import Link from "next/link";

export type Breadcrumb = {
    label: string;
    href?: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
    return (
        <nav className="mb-6 text-xs uppercase tracking-[0.3em] text-felt-500">
            <ol className="flex flex-wrap items-center gap-2">
                {items.map((item, index) => (
                    <li key={item.label} className="flex items-center gap-2">
                        {item.href ? (
                            <Link className="transition hover:text-felt-800" href={item.href}>
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-felt-700">{item.label}</span>
                        )}
                        {index < items.length - 1 && <span className="text-felt-300">/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
