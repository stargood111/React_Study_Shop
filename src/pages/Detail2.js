import {Route, useParams} from "react-router-dom";
import {useState} from "react";


const Detail2 = (props) => {

    let {id} = useParams(); // url Parmeter 정보   <Route path="/detail/:id" element={<Detail shoes ={shoes} />}></Route>
    const filterNum = /^\d+$/.test(id);     // id가 숫자로만 구성된 문자열인지를 체크하는 정규 표현식

    let[shoes] = useState();
    return(
        filterNum ?
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[0].title}</h4>
                        <p>상품설명</p>
                        <p>120000원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div> : <div>잘못되었슴</div>
    )}
export default Detail2;