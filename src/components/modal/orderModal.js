import { useState } from 'react';
import PropTypes from 'prop-types'
import { strToCurrency } from '@/utils/utils';
import { useOrdersStore } from '@/store/ordersStore';


const OrderModal = ({ setShowModal, orderItems, totalPrice, discounts }) => {
  const [customerName, setCustomerName] = useState('')
  const ordersHistory = useOrdersStore(state => state.ordersHistory)
  const { updateOrders } = useOrdersStore()
  const finalPrice = (totalPrice - discounts.discountAmount)

  const handleChange = (event) => (setCustomerName(event.target.value))

  const handleSendOrder = () => {
    const orderObj = { 
      orderItems: orderItems,
      totalOrderPrice: totalPrice,
      finalPrice: finalPrice,
      customerName: customerName
  }
    updateOrders([...ordersHistory, orderObj])
    setShowModal(false)
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font-semibold">
              Your order
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center p-6 w-full">
            <div>
              <h3 className="text-lg font-bold py-4">Items</h3>
              {orderItems?.map((item, index) => {
                const { name, price } = item

                return (
                  <p key={index} className='inline-flex flex-row items-center justify-between py-1 w-full'>
                      <span className='text-base font-semibold'>{name}: </span>
                      <span>
                        {strToCurrency(price)}
                      </span>
                  </p>
                )
              })}
              <p className='inline-flex flex-row items-center justify-between w-full'>
                  <span className='text-lg font-bold pt-4'>Discount applied: </span>
                  <span>%{discounts.appliedDiscount}</span>
              </p>
              <p className='inline-flex flex-row items-center justify-between w-full'>
                  <span className='text-lg font-bold'>Discount: </span>
                  <span>{strToCurrency(discounts.discountAmount)}</span>
              </p>
              <p className='inline-flex flex-row items-center justify-between w-full'>
                  <span className="text-lg font-bold pb-4">Total: </span>
                  <span>
                    {strToCurrency(finalPrice)}
                  </span>
              </p>
            </div>
            <br />
            <form className="flex flex-col justify-center items-center w-full">
              <label className="block text-black text-base font-bold mb-1">
                Customer name
              </label>
              <input
                type='text'
                name='customer-name'
                value={customerName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-10/12 py-2 px-1 text-black" />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-gray-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}>
              Close
            </button>
            <button
              className="px-6 py-2  bg-violet-900 text-white"
              type="button"
              onClick={handleSendOrder}>
              Send order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderModal.propTypes = {
  setInterval: PropTypes.func,
  orderItems: PropTypes.array,
  totalPrice: PropTypes.number,
  discounts: PropTypes.object
}

export default OrderModal;
