import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create((set) => ({
        orderItems: [],
        addToOrder: (newOrder) => set({ orderItems: newOrder}),
    })
)
