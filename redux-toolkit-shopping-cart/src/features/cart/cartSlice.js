import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [
        {
            id: '1',
            title: "articulo 1",
            prices: 10,
            img: "../img/Imagen1.jpeg",
            amount: 1,
        },
        {
            id: '2',
            title: "articulo 2",
            prices: 20,
            img: "../img/Imagen2.jpeg",
            amount: 2,
        },
        {
            id: '3',
            title: "articulo 3",
            prices: 30,
            img: "../img/Imagen3.jpeg",
            amount: 3,
        },
        {
            id: '4',
            title: "Articulo 4 ",
            prices: 40,
            img: "../img/Imagen4.jpeg",
            amount: 4,
        }



    ],
    amount: 9,
    total: 0,
}


// crear un nuevo slice (caracteristicas)
const cartSlice = createSlice({
    name: 'cart',
    initialState,
});
export default cartSlice.reducer;