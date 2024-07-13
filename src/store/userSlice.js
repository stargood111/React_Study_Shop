import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name : 'user',
    initialState : { name : "kim", age : 20},
    reducers: {
        changeName(state){
            return state.name = 'park'
        },
        changeAge(state, action) {
            return state.age = state.age + action.payload //action (reducers 전부를 action이라 함)파라미터 사용시 payload(소포를 보내다 등 뜻) 사용하여야함
        }
    }
    //state 와 같음, store에 state 등록
})
export const { changeName, changeAge } = user.actions

export default user