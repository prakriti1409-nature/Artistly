"use client";

type Column<T> = {
  header: string;
  accessor?: keyof T;
  render?: (item: T, index: number) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export default function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200 text-sm border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-3 text-left font-medium text-gray-700 border border-gray-300">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col, idx) => (
                <td key={idx} className="px-6 py-4 border border-gray-200">
                  {col.accessor ? (item[col.accessor] as React.ReactNode) : col.render?.(item, index)}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center text-gray-500 py-6">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
