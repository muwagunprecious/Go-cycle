'use client'
import { useRef, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { makeStore } from '../lib/store'
import { setInitialCart } from '../lib/features/cart/cartSlice'
import { hydrateSession } from '../lib/features/auth/authSlice'

const CartInitializer = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const savedCart = localStorage.getItem('gocycle_cart')
    if (savedCart) {
      dispatch(setInitialCart(JSON.parse(savedCart)))
    }
    dispatch(hydrateSession())
  }, [dispatch])


  return children
}

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <CartInitializer>
        {children}
      </CartInitializer>
    </Provider>
  )
}
