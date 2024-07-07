import {Route, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Nav from 'react-bootstrap/Nav';

const Detail = (props) => {
    let [test, setTest] = useState(1);
    let [test2,  setTest2] = useState(1);
    let {id} = useParams(); // url Parmeter 정보   <Route path="/detail/:id" element={<Detail shoes ={shoes} />}></Route>
    let[shoes] = useState();
    let [warning ,setWarning] = useState('');
    let [box, setBox] = useState(false);
    let [tab, setTab] = useState(0);
    let [load, setLoad] = useState('');
    useEffect(() => {
        if(isNaN(warning) == true){
            alert('그러지마세요')
        }
    }, [warning]);

    useEffect(() => {
        setLoad("end")
        return(()=>{
            setLoad("")
        })
    },[]);


    return(
        <div className={"container start " + load}>
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
                    <Nav variant="tabs"  defaultActiveKey="link1">
                        <Nav.Item>
                            <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab tab = {tab} shoes= {props.shoes}/>
                </div> :
    <div>없는 데이터 입니다</div>}
        </div>
    )
}
const Tab = ({tab,shoes}) =>{

    let [fade, setFade] = useState('');

    useEffect(()=>{
        let a = setTimeout(()=>{
            setFade('end')
        }, 100)
        return () => {
        setFade('')
            clearTimeout(a)
        }
    },[tab])

    return (
        <div className={'start ' + fade}>
            { [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab] }
        </div>
    )
}
    // if(tab == 0){
    //     return <div className="start">내용0</div>
    // }
    // if(tab == 1){
    //     return <div className="start">내용1</div>
    // }
    // if(tab == 2){
    //     return <div className="start">내용2</div>
    // }

export default Detail;