'use client';

export function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
      <p className="text-sm font-medium mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm">
            {entry.name}: ${entry.value.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}