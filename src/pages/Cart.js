import { Table } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux";
import {changeName,changeAge} from "../store";


const Cart = () => {
    const state =
        useSelector((state)=>{
            return state}) //redux 가져오기
    // const a =
    //     useSelector((state)=>{
    //         return state.user}) //redux 가져오기
    //     console.log(a)
    console.log(state.user.age)

    let dispatch = useDispatch() //redux store 함수 가져와 쓰기

    return (
        <div>
            <h6> {state.user.name} {state.user.age}의 바구니</h6>
            <button onClick={()=>{
                dispatch(changeAge())
            }}>버튼</button>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.product.map((a)=>{
                        return (
                            <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td><button onClick={()=>{
                                    dispatch(changeName())
                                }}>+</button></td>
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