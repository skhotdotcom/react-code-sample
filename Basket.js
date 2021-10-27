import React from 'react'
import BasketProduct from './BasketProduct';
import CheckoutButton from './CheckoutButton';

function Basket({order, onAdd, onRemove}) {

    const productPrice = order.reduce((a, c) => a + c.price * c.qty, 0);
    const commissionPrice = (productPrice) * .1;
    const taxPrice = (productPrice + commissionPrice) * 0.07;
    const tipPrice = (productPrice + taxPrice + commissionPrice) * .20;
    const totalPrice = productPrice + taxPrice + tipPrice + commissionPrice;

    return (
 
        <div>
            <h1>My Order - {order.length} items(s)</h1>
            <div>
            {order.length === 0 ? <p>Nothing here yet, add an item to your order to get started.</p> :
                
                order.map((product) => (
                    <BasketProduct key={product.id} product={product} onAdd={onAdd} onRemove={onRemove} />

                ))
            }
            </div>
            {order.length !== 0 ? 
                <div>
                    <hr />
                    <p>Item Price: {Number(productPrice).toFixed(2)}</p>
                    <p>Commission Fee: {Number(commissionPrice).toFixed(2)}</p>
                    <p>Tax: {Number(taxPrice).toFixed(2)}</p>
                    <p>Tip: {Number(tipPrice).toFixed(2)}</p>
                    <p><strong>Total: {Number(totalPrice).toFixed(2)}</strong></p>
                    <hr/>
                    <CheckoutButton order={order} total={totalPrice} />
                </div> :
                ''
            }
        </div>
    )
}

export default Basket
