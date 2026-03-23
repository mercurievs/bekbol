type AdminStatCardProps = {
    label: string;
    value: string;
    trend: string;
};

export function AdminStatCard({ label, value, trend }: AdminStatCardProps) {
    return (
        <div className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{label}</p>
            <p className="mt-4 text-3xl font-semibold text-felt-900">{value}</p>
            <p className="mt-2 text-sm text-felt-600">{trend}</p>
        </div>
    );
}
