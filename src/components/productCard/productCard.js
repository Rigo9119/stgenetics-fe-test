import { strToCurrency } from '@/utils/utils'
import PropTypes from 'prop-types'


const ProductCard = ({ menuItem, itemIndex, onHandleAddItem }) => {
  const { name, price, selected } = menuItem
  const normalBckgColor = 'bg-rose-600'
  const selectedBckgColor = 'bg-violet-900'
  const normalBorderColor = 'border-rose-600'
  const selectedBorderColor = 'border-violet-900'
  const colorBorderVal = selected ? selectedBorderColor : normalBorderColor
  const colorBkgVal = selected ? selectedBckgColor : normalBckgColor
  const textVal = selected ? 'Item added' : 'Add to order'

  return (
    <div className='flex flex-row items-center justify-between mb-6 w-7/12'>
      <div className={`flex flex-col items-center justify-between border ${colorBorderVal} w-8/12`}>
        <span className='flex flex-row items-center justify-between py-4 w-10/12'>
          <p className='text-base font-semibold'>
            {name}:
          </p>
          <p className='text-base font-semibold'>
            {strToCurrency(price)}
          </p>
        </span>
      </div>
      <div className='flex flex-row items-center justify-items-start w-3/12'>
        <button 
          className={`px-8 py-4 ${colorBkgVal} text-white font-semibold w-full`}
          onClick={() => onHandleAddItem(menuItem, itemIndex)}>
          {textVal}
        </button>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  menuItem: PropTypes.object,
  itemIndex: PropTypes.number,
  onHandleAddItem: PropTypes.func
}

export default ProductCard
