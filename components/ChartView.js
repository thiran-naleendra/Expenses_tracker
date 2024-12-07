'use client';

import { Card } from '@/components/ui/card';
import { BarChart, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './charts/CustomTooltip';
import { CustomXAxis } from './charts/CustomXAxis';
import { CustomYAxis } from './charts/CustomYAxis';
import { CustomBar } from './charts/CustomBar';

export default function ChartView({ income, expenses }) {
  const data = [
    {
      name: 'Current Month',
      Income: income,
      Expenses: expenses,
    },
  ];

  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-4">Monthly Overview</h2>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <CustomXAxis dataKey="name" />
            <CustomYAxis />
            <Tooltip content={<CustomTooltip />} />
            <CustomBar dataKey="Income" color="rgba(34, 197, 94, 0.8)" />
            <CustomBar dataKey="Expenses" color="rgba(239, 68, 68, 0.8)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}