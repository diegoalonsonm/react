import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart.jsx'

function CartItem ({thumbnail, price, title, quantity, addToCart, removeFromCart}) {
  return (
    <li>
      <img src={thumbnail} alt={title}/>
      <div>
        <strong>{title}</strong> -${price}
        <footer>
          <small>Qty: {quantity}</small>
          <button onClick={addToCart}>+</button>
        </footer>
      </div>
    </li>
  )
}

export function Cart () {
  const CartCheckboxId = useId()
  const {cart, clearCart, addToCart} = useCart()

  return(
    <>
      <label htmlFor={CartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type="checkbox" id={CartCheckboxId} hidden/>
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id} addToCart={()=>addToCart(product)} {...product}
            />
          ))}
        </ul>
        <button className="SC-button" onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <h1>Total:</h1>
      </aside>
    </>
  )
}