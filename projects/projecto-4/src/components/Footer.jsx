import './Footer.css'
import { useFilters } from '../hooks/useFilters.jsx'
import { useCart } from '../hooks/useCart.jsx'

export function Footer () {
  const { filters } = useFilters()
  const {cart} = useCart()

  return (
    <footer className='footer'>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}