import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    initialState: [],
    name:"cartSlice",
    reducers: {
        addCart:(state, action) =>{
            const findProduct = state.find((product)=> product.id === action.payload.id)
            if(findProduct){
                findProduct.quantity +=1
            }else{
                const productClone ={...action.payload, quantity:1}
            state.push(productClone)
        }
        },
        deleteFromCart:(state, action) =>{
            return state.filter((product)=> product.id !== action.payload.id)
        },
        clear:(state, action) =>{
            return []
        }
    }
})
export const {addCart, deleteFromCart, clear} = cartSlice.actions;

export default cartSlice.reducer