import { strToCurrency } from '@/utils/utils'
import PropTypes from 'prop-types'

const OrderCard = ({ customerName, orderItems, totalOrderPrice }) => {

    return (
        <div className='flex flex-col items-center justify-between border rounded border-cyan-600 mb-4 px-8 py-4 w-8/12'>
            <div className='flex flex-row border-b items-center justify-between rounded border-cyan-600 mb-4 w-full'> 
                <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                    <span className='text-base font-semibold'>Customer name: </span>
                    {customerName}
                </p>
            </div>

            <div className='flex flex-col border-b items-center justify-between rounded border-cyan-600 mb-4 w-full'>
                <p className='text-base font-semibold'>Order items</p>
                {orderItems?.map((item, index) => {
                    const { name, price } = item

                    return (
                        <p key={index} className='inline-flex flex-row items-center justify-between py-1 w-full'>
                            <span className='text-base font-semibold'>{name}: </span>
                            {strToCurrency(price)}
                        </p>
                    )
                })}
            </div>
            <p className='text-base font-semibold'>Total</p>
            <p className='inline-flex flex-row items-center justify-between py-1 w-full'>
                <span className='text-base font-semibold'>Total order price: </span>
                {strToCurrency(totalOrderPrice)}
            </p>
        </div>
    )
}

OrderCard.propTypes = {
    customerName: PropTypes.string,
    orderItems: PropTypes.array,
    totalOrderPrice: PropTypes.number
}

export default OrderCard
