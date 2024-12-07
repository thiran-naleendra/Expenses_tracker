'use client';

import { Card } from '@/components/ui/card';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';

export default function Summary({ income, expenses }) {
  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-600 dark:text-green-400">Total Income</p>
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mt-1">
              Rs {income.toFixed(2)}
            </h3>
          </div>
          <div className="h-12 w-12 bg-green-200 dark:bg-green-800/30 rounded-full flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-green-700 dark:text-green-300" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-red-600 dark:text-red-400">Total Expenses</p>
            <h3 className="text-2xl font-bold text-red-700 dark:text-red-300 mt-1">
              Rs {expenses.toFixed(2)}
            </h3>
          </div>
          <div className="h-12 w-12 bg-red-200 dark:bg-red-800/30 rounded-full flex items-center justify-center">
            <TrendingDown className="h-6 w-6 text-red-700 dark:text-red-300" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Net Balance</p>
            <h3 className={`text-2xl font-bold mt-1 ${
              balance >= 0 
                ? 'text-blue-700 dark:text-blue-300' 
                : 'text-red-700 dark:text-red-300'
            }`}>
              Rs {balance.toFixed(2)}
            </h3>
          </div>
          <div className="h-12 w-12 bg-blue-200 dark:bg-blue-800/30 rounded-full flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-blue-700 dark:text-blue-300" />
          </div>
        </div>
      </Card>
    </div>
  );
}