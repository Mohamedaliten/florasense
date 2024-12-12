'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account, databases } from '../server/appwrite';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import { ID } from 'appwrite';

export default function Register() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Password mismatch',
        description: 'Passwords do not match.',
      });
      return;
    }

    setLoading(true);

    try {
      // Create user account
      const response = await account.create(
        ID.unique(),
        formData.email,
        formData.password,
        formData.username
      );

      // Save user data to the database
      await databases.createDocument(
        '67582cde2c610f9c8e70', // Replace with your Database ID
        '67582cedb5f1a0b04238', // Replace with your Collection ID
        response.$id,
        {
          username: formData.username,
          email: formData.email,
        }
      );

      toast({
        title: 'Registration successful',
        description: 'Please log in to continue.',
      });

      router.push('/login');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Registration failed',
        description: error.message || 'An error occurred.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">PlantGuard</span>
          </div>
          <h2 className="text-2xl font-bold text-center">Create an account</h2>
          <p className="text-gray-500 text-center">Enter your details to get started</p>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            <Input
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Your username"
              required
              label="Username"
            />
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              label="Email"
            />
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              label="Password"
            />
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              label="Confirm Password"
            />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Sign up'}
            </Button>
            <p className="text-sm text-center text-gray-500">
              Already have an account?{' '}
              <Link href="/login" className="text-green-600 hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
