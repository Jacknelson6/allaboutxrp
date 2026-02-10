interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
}

export default function DataTable<T>({ data, columns, keyExtractor }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-white/[0.06]">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={`px-4 py-3 text-[11px] font-medium uppercase tracking-widest text-white/30 ${col.className || ""}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {data.map((item) => (
            <tr key={keyExtractor(item)} className="transition-colors duration-150 hover:bg-white/[0.015]">
              {columns.map((col) => (
                <td key={col.key} className={`px-4 py-3 ${col.className || ""}`}>
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
