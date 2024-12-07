'use client';

import { XAxis } from 'recharts';

export function CustomXAxis({ dataKey }) {
  return (
    <XAxis
      dataKey={dataKey}
      axisLine={{ stroke: '#e5e7eb', strokeWidth: 1 }}
      tickLine={false}
      tick={{ fill: '#6b7280', fontSize: 12 }}
    />
  );
}