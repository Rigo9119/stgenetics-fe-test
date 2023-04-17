import { strToCurrency } from '@/utils/utils'
import PropTypes from 'prop-types'

const OrderCard = ({ customerName, orderItems, totalOrderPrice }) => {
    console.log(totalOrderPrice)
    return (
        <div className='flex flex-col items-center justify-between shadow-lg mb-4 px-8 py-4 w-6/12'>
            <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                <span className='text-base font-semibold'>Customer name: </span>
                <span>{customerName}</span>
            </p>
            {orderItems?.map((item) => {
                const { name, price } = item

                return (
                    <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                        <span className='text-base font-semibold'>{name}: </span>
                        <span>{strToCurrency(price)}</span>
                    </p>
                )
            })}
            <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                <span className='text-base font-semibold'>Total order price: </span>
                <span>{strToCurrency(totalOrderPrice)}</span>
            </p>
            <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                <span className='text-base font-semibold'>fries: </span>
                <span>$100</span>
            </p>
            <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                <span className='text-base font-semibold'>soft drink: </span>
                <span>$100</span>
            </p>
        </div>
    )
}

OrderCard.propTypes = {
    customerName: PropTypes.string,
    orderItems: PropTypes.array
}

export default OrderCard
