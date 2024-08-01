import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

const useAuthStore = create((set, get) => ({
  allUserData: null,
  loading: false,

  user: () => ({
    user_id: get().allUserData?.user_id || null,
    username: get().allUserData?.username || null,
    es_transportista: get().allUserData?.es_transportista || null,
    es_cliente: get().allUserData?.es_cliente || null,
  }),

  setUser: (user) =>
    set({
      allUserData: user,
    }),
  
  setLoading: (loading) => set({ loading }),

  isLoggedIn: () => get().allUserData !== null,

  isCliente: () => get().allUserData?.es_cliente === true,
  isTransportista: () => get().allUserData?.es_transportista === true,
}));


if (import.meta.env.DEV) {
  mountStoreDevtool("Store", useAuthStore);
}

export { useAuthStore };
