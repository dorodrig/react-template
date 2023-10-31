import {createSlice} from '@reduxjs/toolkit';

const initalState = {
    cartItem : [],
    amount : 0,
    total : 0,
}


// crear un nuevo slice (caracteristicas)
const createSlice = createSlice({
    name: 'cart',
    initalState,
});
export default cartSlice.reducer;