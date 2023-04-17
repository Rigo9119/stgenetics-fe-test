import { useEffect, useState } from 'react'
import OrderCard from '@/components/orderCard/orderCard'
import { useOrdersStore } from '@/store/ordersStore'


export default function Orders() {
    const ordersHistory = useOrdersStore(state => state.ordersHistory)
    const [orders, setOrders ] = useState([])

    useEffect(() => setOrders(ordersHistory), [ordersHistory])

    return (
        <main className="flex flex-col items-center justify-between px-12 py-8">
            <div className="flex flex-col items-center justify-between w-full">
                <h2 className="text-lg font-bold py-8">Orders</h2>
                {orders.length < 1 ? (
                    <h3>No orders to display yet</h3>
                ): null}

                {orders.map((order, index) => {
                    const { customerName, orderItems, totalOrderPrice } = order

                    return ( 
                        <OrderCard
                            key={index}
                            customerName={customerName}
                            orderItems={orderItems} 
                            totalOrderPrice={totalOrderPrice}/>
                    )
                }).reverse()}
            </div>
        </main>
    )
}

