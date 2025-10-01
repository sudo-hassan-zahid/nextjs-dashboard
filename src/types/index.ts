export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age?: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age?: number;
}