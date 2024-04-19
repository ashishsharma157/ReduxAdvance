import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuanitity:0,
    },
    reducers:{
        addItemToCart(state, action){
            console.log("slice");
            const newItem=action.payload;
            console.log(newItem);
            const existingItem=state.items.find(item=>item.id===newItem.id);
            state.totalQuanitity++;
            if(!existingItem)
            {
                state.items.push({id:newItem.id, price:newItem.price, quantity:1, totalPrice:newItem.price, name:newItem.title});
            }
            else
            {
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+newItem.price
            }
            //console.log(state.items[0]);
        },
        removeItemToCart(state, action){
            const id=action.payload;
            const existingItem =state.items.find(item=>item.id===id);
            state.totalQuanitity--;
            if(existingItem.quantity===1)
            {
                state.items=state.items.filter(item=>item.id !== id);
            }
            else
            {
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
            }
        }
    }
});

export const cartActions=cartSlice.actions;
export default cartSlice;
