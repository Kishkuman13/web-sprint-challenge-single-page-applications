import React from 'react'

export default function OrderConfirm(props) {
    const { values } = props
    const toppings = [
        props.pepperoni,
        props.ham,
        props.sausage,
        props.onions,
        props.olives,
        props.extra
    ]
    console.log(toppings)
    return (
        <div className="wrapper confirm">
          <h1>Thank you for your order!</h1>
          <h2>Your order is on it's way!</h2>
        </div>
    )
}