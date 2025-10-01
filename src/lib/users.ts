import api from './api';
import { User } from '@/types';

export const usersService = {
  async getAll(): Promise<User[]> {
    const response = await api.get('/users');
    return response.data;
  },

  async getById(id: number): Promise<User> {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  async create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const response = await api.post('/users', data);
    return response.data;
  },

  async update(id: number, data: Partial<User>): Promise<User> {
    const response = await api.patch(`/users/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};