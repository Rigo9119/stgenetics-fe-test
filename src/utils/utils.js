export const strToCurrency = (str) => {
    const price = Number(str).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    return price
}

export const getDiscounts = (price, discount) => {
    const discountPrice = price * (discount / 100)

    return {
        appliedDiscount: discount,
        discountAmount: parseFloat(discountPrice).toFixed(2)
    }
}
