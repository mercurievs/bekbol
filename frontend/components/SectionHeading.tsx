type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    subtitle: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
    return (
        <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-felt-500">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold text-felt-900 md:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-felt-700">{subtitle}</p>
        </div>
    );
}
