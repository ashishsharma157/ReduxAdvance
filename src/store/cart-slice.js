import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuanitity:0,
    },
    reducers:{
        addItemToCart(state, action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id);
            if(!existingItem)
            {
                state.items.push({id:newItem.id, price:newItem.price, quantity:1, totalPrice:newItem.price, name:newItem.name});
            }
            else
            {
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+newItem.price
            }
        },
        removeItemToCart(){}
    }
})