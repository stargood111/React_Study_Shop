import {configureStore, createSlice} from "@reduxjs/toolkit";
import user from './store/userSlice.js'
import {useEffect} from "react";

const stock = createSlice({
            name : 'stock',
            initialState : [10,11,12]})
        //state 와 같음, store에 state 등록
const product= createSlice({
    name : 'product',
    initialState :
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        plusButton(state, action){

            // 해당 id로 항목 찾기
            const itemid = state.find(function(product) {
                return product.id === action.payload; // id와 같은지를 비교
                });

            // count 값 출력
            if (itemid) {
                itemid.count = itemid.count+1; // count 값 출력
            } else {
                console.log('Item not found'); // 항목이 없을 경우
            }
        },
        plusinitialState(state, action) {
            const itemid = state.find((product)=>{
                    return product.id === action.payload.id
            })
            const itemname = state.find((product)=>{
                return product.name === action.payload.name
            })
            if(!itemid){
                state.push({...action.payload, count : 1});
            }
            else {
                console.log(itemid.count)
                itemid.count = itemid.count + 1;}

        },
        subButton(state,action) {

            const itemid = state.find(function (product) {
                return product.id === action.payload
            })
            if (itemid) {
                console.log(itemid.count)
                const newState = state.filter(function(product){
                    return product.id !== action.payload
                })
                return newState
            }
            else {
                    console.log('Item not found'); // 항목이 없을 경우
            }

            },
        dupButton(state, action) {
            const itemid = state.find((proeuct)=>{
                            return proeuct.id === action.payload
            })
            if (itemid) {

            }
        }
}})
export const {subButton, plusButton,plusinitialState } = product.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        product : product.reducer,
        // store 내보내기
    }
})