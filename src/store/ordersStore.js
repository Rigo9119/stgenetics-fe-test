import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useOrdersStore = create(persist(
    (set) => ({
        ordersHistory: [],
        updateOrders: (newOrderObj) => set({ ordersHistory: newOrderObj})
    }),
    { name: 'orders_history'}
))

