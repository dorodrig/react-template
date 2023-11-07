import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: [],
    amount: 4,
    total: 0,
}


// crear un nuevo slice (caracteristicas)
const cartSlice = createSlice({
    name: 'cart',
    initialState,
});
export default cartSlice.reducer;