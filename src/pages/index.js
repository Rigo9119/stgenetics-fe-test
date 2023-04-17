import { useState } from "react";
import Filters from "@/components/filters/filters";
import Products from "@/components/products/products";
import OrderModal from "@/components/modal/orderModal";
import { useCartStore } from "@/store/cartStore";
import { getDiscounts } from "@/utils/utils";


const menu = {
    sandwiches: [
        { name: "X Burguer", price: "5.00", type: "sandwich" },
        { name: "X Egg", price: "4.50", type: "sandwich"},
        { name: "X Bacon", price: "7.00", type: "sandwich"},
    ],
    extras: [
      { name: "Fries", price: "2.00", type: "extra_fries"},
      { name: "Soft drink", price: "2.50", type: "extra_softDrink"}
    ],
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState("all");
  const orderItems = useCartStore((state) => state.orderItems);
  const prices = orderItems?.map((item) => Number(item.price));
  const orderItemsTypes = orderItems?.map((item) => item.type);
  const colorBtnVal = orderItems.length > 0 ? 'bg-violet-900' : 'bg-violet-400'
  const totalPrice = prices?.reduce(
    (accumulator, currentPrice) => accumulator + currentPrice,
    null
  );

  const onHandleFilterMenu = (event) => {
    setShowMenu(event.target.value);
  };

  const handleDiscount = (types, totalPrice) => {
      const discounts = { twenty: 20, fifteen: 15, ten: 10 }

      if(types.includes('sandwich' && 'extra_fries' && 'extra_softDrink')) {
        const { appliedDiscount, price } = getDiscounts(totalPrice, discounts.twenty)

        return { appliedDiscount, price }

      } else if(types.includes('sandwich' && 'extra_softDrink')) {
        const { appliedDiscount, price } = getDiscounts(totalPrice, discounts.fifteen)

        return { appliedDiscount, price }

      } else if(types.includes('sandwich' && 'extra_fries')) {
        const { appliedDiscount, price } = getDiscounts(totalPrice, discounts.ten)

        return { appliedDiscount, price }
      }

      return {
        appliedDiscount: null,
        price: totalPrice
      }
  };

  return (
    <main className="flex flex-col items-center justify-between px-12 py-8">
      <div className="flex flex-col items-center justify-between w-full">
        <Filters showMenu={showMenu} onHandleFilterMenu={onHandleFilterMenu} />
        {showMenu === "all" ? (
          <>
            <h1 className="text-lg font-bold py-8">Our Menu</h1>
            <Products menuItems={menu.sandwiches} />
            <h2 className="text-lg font-semibold  py-6 my-8">Extras</h2>
            <Products menuItems={menu.extras} />
          </>
        ) : null}
        {showMenu === "sandwiches" ? (
          <>
            <h1 className="text-lg font-bold py-8">Our Menu</h1>
            <Products menuItems={menu.sandwiches} />
          </>
        ) : null}
        {showMenu === "extras" ? (
          <>
            <h2 className="text-lg font-semibold  py-6 my-8">Extras</h2>
            <Products menuItems={menu.extras} />
          </>
        ) : null}
        {showModal ? (
          <OrderModal
            orderItems={orderItems}
            discounts={handleDiscount(orderItemsTypes, totalPrice)}
            totalPrice={totalPrice}
            setShowModal={setShowModal}
          />
        ) : null}
      </div>
      <button
        className={`px-6 py-2 mt-12 ${colorBtnVal} text-white`}
        disabled={orderItems.length === 0}
        onClick={() => setShowModal(true)}>
        Check your order
      </button>
    </main>
  );
}
