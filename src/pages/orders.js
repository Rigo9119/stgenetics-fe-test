import OrderCard from '@/components/orderCard/orderCard'
import { useOrdersStore } from '@/store/ordersStore'


export default function Orders() {
    const ordersHistory = useOrdersStore(state => state.ordersHistory)
    return (
        <main className="flex flex-col items-center justify-between px-12 py-8">
            <div className="flex flex-col items-center justify-between w-full">
                <h2 className="text-lg font-bold py-8">Orders</h2>
                
                {ordersHistory.length > 0 ? (
                    <>
                        {ordersHistory.map((order, index) => {
                            const { customerName, orderItems } = order

                            return ( 
                                <OrderCard
                                    key={index}
                                    customerName={customerName}
                                    orderItems={orderItems} />
                            )
                        })}
                    </>
                ) : <h2>No orders to display yet</h2>}
            </div>
        </main>
    )
}

