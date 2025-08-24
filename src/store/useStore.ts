import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  username: string;
  position?: string;
  profileName?: string;
  profileIcon?: number | string;
  uploadedImage?: string;
}

interface StoreState {
  user: User | null;
  isAuthenticated: boolean;
  
  // Actions
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string, position: string) => Promise<void>;
  logout: () => void;
  updateProfile: (profileName: string, profileIcon: number | string, uploadedImage?: string) => void;
  setProfileName: (profileName: string) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (username: string, password: string) => {
        // TODO: Replace with actual API call
        const mockUser: User = {
          id: '1',
          username,
        };
        set({ user: mockUser, isAuthenticated: true });
      },

      signup: async (username: string, password: string, position: string) => {
        // TODO: Replace with actual API call
        const mockUser: User = {
          id: '1',
          username,
          position,
        };
        set({ user: mockUser, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateProfile: (profileName: string, profileIcon: number | string, uploadedImage?: string) => {
        set((state) => ({
          user: state.user ? { ...state.user, profileName, profileIcon, uploadedImage } : null,
        }));
      },

      setProfileName: (profileName: string) => {
        set((state) => ({
          user: state.user ? { ...state.user, profileName } : null,
        }));
      },
    }),
    {
      name: 'kfc-mind-pharmacy-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);

export default useStore;