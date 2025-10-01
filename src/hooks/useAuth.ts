'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useAuth(requireAuth: boolean = false) {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, checkAuth, logout } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && requireAuth && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, requireAuth, router]);

  return {
    user,
    isAuthenticated,
    isLoading,
    logout: () => {
      logout();
      router.push('/login');
    },
  };
}