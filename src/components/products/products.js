import { useState } from 'react';
import ProductCard from '../productCard/productCard';
import { useCartStore } from '@/store/cartStore';

const Products = ({ menuItems }) => {
    const [items, setItems] = useState(menuItems)
    const orderItems = useCartStore(state => state.orderItems)
    const { addToOrder } = useCartStore()

    const onHandleAddItem = (menuItem, itemIndex) => {
        const selectedItem = [
            {...menuItem, selected: true}
        ]
        setItems(selectedItem)
        addToOrder([...orderItems, menuItem])
    }

    return (
        <div className="flex flex-col items-center justify-between mt-8 w-full">
            {items?.map((item, index) => (
                <ProductCard 
                    key={item.name}
                    menuItem={item}
                    itemIndex={index}
                    onHandleAddItem={onHandleAddItem}/>
            ))}
        </div>
    );
}

export default Products;
