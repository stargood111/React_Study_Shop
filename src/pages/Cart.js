import { Table } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {changeName,changeAge} from "../store/userSlice.js";
import {plusButton, subButton} from "../store.js"
import styled from "styled-components";


const Cart = () => {
    const state =
        useSelector((state)=>{
            return state}) //redux 가져오기
    // const a =
    //     useSelector((state)=>{
    //         return state.user}) //redux 가져오기
    //     console.log(a)
    // console.log(state.user.age)

    let dispatch = useDispatch() //redux store 함수 가져와 쓰기

    return (
        <div>

            <h6> {state.user.name} {state.user.age}의 바구니</h6>
            <button onClick={()=>{
                dispatch(changeAge(100))
            }}>버튼</button>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.product.map((a,i)=>{
                        return (
                            <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td><button onClick={()=>{
                                    dispatch(plusButton(a.id));
                                }}>+</button></td>
                                <td style={{fontSize: '25px', fontStyle:"bold"}}
                                    onClick={()=>{dispatch(subButton(a.id))}}>-</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
        </div>
    )
}

export default Cart