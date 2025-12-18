import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        total: 0,
        cartItems: {},
    },
    reducers: {
        setInitialCart: (state, action) => {
            state.cartItems = action.payload.cartItems || {}
            state.total = action.payload.total || 0
        },
        addToCart: (state, action) => {
            const { productId } = action.payload
            if (state.cartItems[productId]) {
                state.cartItems[productId]++
            } else {
                state.cartItems[productId] = 1
            }
            state.total += 1
            if (typeof window !== 'undefined') {
                localStorage.setItem('gocycle_cart', JSON.stringify({ cartItems: state.cartItems, total: state.total }))
            }
        },
        removeFromCart: (state, action) => {
            const { productId } = action.payload
            if (state.cartItems[productId]) {
                state.total -= 1
                state.cartItems[productId]--
                if (state.cartItems[productId] === 0) {
                    delete state.cartItems[productId]
                }
            }
            if (typeof window !== 'undefined') {
                localStorage.setItem('gocycle_cart', JSON.stringify({ cartItems: state.cartItems, total: state.total }))
            }
        },
        deleteItemFromCart: (state, action) => {
            const { productId } = action.payload
            state.total -= state.cartItems[productId] ? state.cartItems[productId] : 0
            delete state.cartItems[productId]
            if (typeof window !== 'undefined') {
                localStorage.setItem('gocycle_cart', JSON.stringify({ cartItems: state.cartItems, total: state.total }))
            }
        },
        clearCart: (state) => {
            state.cartItems = {}
            state.total = 0
            if (typeof window !== 'undefined') {
                localStorage.removeItem('gocycle_cart')
            }
        },
    }
})

export const { addToCart, removeFromCart, clearCart, deleteItemFromCart, setInitialCart } = cartSlice.actions

export default cartSlice.reducer

