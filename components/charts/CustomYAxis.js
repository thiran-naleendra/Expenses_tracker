'use client';

import { YAxis } from 'recharts';

export function CustomYAxis() {
  return (
    <YAxis
      axisLine={{ stroke: '#e5e7eb', strokeWidth: 1 }}
      tickLine={false}
      tick={{ fill: '#6b7280', fontSize: 12 }}
      tickFormatter={(value) => `$${value}`}
    />
  );
}