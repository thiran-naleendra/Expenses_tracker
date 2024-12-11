import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Track Your Expenses with Ease
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Take control of your finances with our simple and intuitive expense tracking app.
          Monitor your income, expenses, and savings all in one place.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/auth/signin">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="outline" size="lg">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}