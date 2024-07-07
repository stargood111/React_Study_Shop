import {configureStore, createSlice} from "@reduxjs/toolkit";

const user = createSlice({
            name : 'user',
            initialState : { name : "kim", age : 20},
            reducers: {
                changeName(state){
                    state.name = 'park'
                },
                changeAge(state) {
                    state.age = state.age + 1
                }
            }
        //state 와 같음, store에 state 등록
        })
export const { changeName, changeAge } = user.actions

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
        plusButton(state){
            return state.count + 1
        }
    }
})


export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        product : product.reducer
        // store 내보내기
    }
})