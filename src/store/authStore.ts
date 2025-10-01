import { create } from 'zustand';
import { authService } from '@/lib/auth';
import { LoginCredentials, RegisterData } from '@/types';

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (credentials) => {
    const data = await authService.login(credentials);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    set({ user: data.user, isAuthenticated: true });
  },

  register: async (registerData) => {
    const data = await authService.register(registerData);
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    set({ user: data.user, isAuthenticated: true });
  },

  logout: () => {
    authService.logout();
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        set({ isLoading: false, isAuthenticated: false });
        return;
      }

      const user = await authService.getProfile();
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (error) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));