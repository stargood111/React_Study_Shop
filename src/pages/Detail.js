import {Route, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Detail = (props) => {
    let [test, setTest] = useState(1);
    let [test2,  setTest2] = useState(1);
    let {id} = useParams(); // url Parmeter 정보   <Route path="/detail/:id" element={<Detail shoes ={shoes} />}></Route>
    let[shoes] = useState();
    let [warning ,setWarning] = useState('');
    let [box, setBox] = useState(false);

    useEffect(() => {
        if(isNaN(warning) == true){
            alert('그러지마세요')
        }
    }, [warning]);

    return(
        <div className="container">
            {props.shoes[id] != null ?
                <div className="row">
                <input type="text" placeholder="수량입력" onChange={(e)=>{
                    setWarning(e.target.value)
                }}/>
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%"/>
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
    <p>상품설명</p>
    <p>120000원</p>
    <button className="btn btn-danger">주문하기</button>
</div>
</div> :
    <div>없는 데이터 입니다</div>}
        </div>
    )
}

export default Detail;