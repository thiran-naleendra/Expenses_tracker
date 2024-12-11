'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  const validatePassword = () => {
    const validationErrors: string[] = [];
    // if (password.length < 8) {
    //   validationErrors.push('Password must be at least 8 characters long.');
    // }
    // if (!/[A-Z]/.test(password)) {
    //   validationErrors.push('Password must include at least one uppercase letter.');
    // }
    // if (!/[a-z]/.test(password)) {
    //   validationErrors.push('Password must include at least one lowercase letter.');
    // }
    // if (!/[0-9]/.test(password)) {
    //   validationErrors.push('Password must include at least one number.');
    // }
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   validationErrors.push('Password must include at least one special character.');
    // }
    if (password !== confirmPassword) {
      validationErrors.push('Passwords do not match.');
    }
    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiUrl = process.env.API_URL;

    if (!validatePassword()) {
      toast({
        title: 'Error',
        description: 'Please fix the highlighted issues before proceeding.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast({
        title: 'Success',
        description: 'Account created successfully',
      });

      router.push('/auth/signin');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {errors.length > 0 && (
            <ul className="text-red-600 text-sm space-y-1">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
          <div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
