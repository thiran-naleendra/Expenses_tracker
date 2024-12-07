'use client';

import { Bar } from 'recharts';

export function CustomBar({ dataKey, color }) {
  return (
    <Bar
      dataKey={dataKey}
      fill={color}
      radius={[4, 4, 0, 0]}
      maxBarSize={60}
    />
  );
}