type Column = {
    label: string;
    key: string;
};

type AdminTableProps = {
    title: string;
    columns: Column[];
    rows: Array<Record<string, string>>;
    actionLabel?: string;
    searchPlaceholder?: string;
    filtersLabel?: string;
};

export function AdminTable({
    title,
    columns,
    rows,
    actionLabel,
    searchPlaceholder = "Поиск",
    filtersLabel = "Фильтры"
}: AdminTableProps) {
    return (
        <div className="rounded-3xl border border-felt-100 bg-white p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.3em] text-felt-500">{title}</p>
                <div className="flex items-center gap-3">
                    <input
                        className="rounded-full border border-felt-200 px-4 py-2 text-xs uppercase tracking-widest text-felt-500"
                        placeholder={searchPlaceholder}
                    />
                    <button className="rounded-full border border-felt-200 px-4 py-2 text-xs uppercase tracking-widest text-felt-600">
                        {filtersLabel}
                    </button>
                </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-felt-100">
                <table className="w-full text-left text-sm">
                    <thead className="bg-felt-50 text-xs uppercase tracking-[0.3em] text-felt-500">
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key} className="px-4 py-3 font-medium">
                                    {column.label}
                                </th>
                            ))}
                            {actionLabel && <th className="px-4 py-3 font-medium">{actionLabel}</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-felt-100">
                        {rows.map((row, index) => (
                            <tr key={`${row.id ?? index}`} className="bg-white">
                                {columns.map((column) => (
                                    <td key={column.key} className="px-4 py-3 text-felt-700">
                                        {row[column.key]}
                                    </td>
                                ))}
                                {actionLabel && (
                                    <td className="px-4 py-3">
                                        <button className="rounded-full bg-felt-800 px-3 py-2 text-[10px] uppercase tracking-widest text-felt-50">
                                            {actionLabel}
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
