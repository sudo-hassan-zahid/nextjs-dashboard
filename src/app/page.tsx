import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              User Management System
            </h1>
            <p className="text-xl text-gray-600">
              A modern, secure platform for managing users with ease
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/login">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline">
                Create Account
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card>
              <CardHeader>
                <CardTitle>🔐 Secure Authentication</CardTitle>
                <CardDescription>
                  JWT-based authentication with refresh tokens for maximum security
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚡ Fast & Modern</CardTitle>
                <CardDescription>
                  Built with Next.js 15 and React for lightning-fast performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📊 User Management</CardTitle>
                <CardDescription>
                  Complete CRUD operations with an intuitive dashboard interface
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Next.js 15',
                'React',
                'TypeScript',
                'TailwindCSS',
                'shadcn/ui',
                'React Query',
                'Zustand',
                'Axios',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}