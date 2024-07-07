import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useState} from "react";
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
// useNavigate = Link 와 같으나 a태그를 없애주고 -1,-2 +1 같은 기능이 있음
// Outlet 원하는 404페이지 같은 경로 설정 가능
import Detail from './pages/Detail.js'
import Cart from './pages/Cart.js'
import styled from 'styled-components'
import axios from "axios";


function App(){

  let [shoes, setShoes] = useState(data);
  let [shoes2, setShoes2] = useState()
  let navigate = useNavigate();
  let [click, setClick] = useState(0);
  let [click2 ,setClick2] =useState(true);
  return (
      <div>

          <Navbar bg="grey" variant="grey">
              <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link onClick={() => {
                          navigate(-1)
                      }}>Home</Nav.Link>
                      <Nav.Link onClick={() => {
                          navigate('/detail')
                      }}>Detail</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/detail">Detail</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
          <Routes>
              <Route path="/" element={
                  <>
                      <div className="main-bg">
                      </div>
                      <div className="container">
                          <div className="row">
                              <Modal shoes={shoes}></Modal>
                          </div>
                      </div>
                  </>
              }>
              </Route>
              <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              {/*<Route path="/*" element={<div>잘못된 경로입니다.</div>}></Route>*/}
              {/*<Route path="about" element={<div>어바웃페이지</div>}></Route> //Outlet Hook*/}
              <Route path="/about" element={<About/>}>
                  <Route path="member" element={<About/>}></Route> ///about/member
                  <Route path="location" element={<About/>}></Route> ///about/location
              </Route>
          </Routes>
          { click2 == true ?
          <button onClick={() => {
              if(click < 2) {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((response) => {
                  let resultResponse = [...shoes, ...response.data]
                  setShoes(resultResponse)
                  setClick(click + 1)
              })
                  .catch(() => {
                      console.log('실패함')
                  })}
              else{
                  setClick2(false)
                  alert('더는 없습니다')
          }}}>더보기
          </button> : null }
      </div>

  )
}

const Modal = (props) => {
    return (
        <>
            {props.shoes.map((shoes, i) => (
                <div key={i} className="col-md-4">
                    <img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%"/>
                    <h4>{props.shoes[i].title}</h4>
                    <p>{props.shoes[i].price}</p>
                </div>
            ))}
        </>
    );
}
const About = () => {
                return(
                    <div>
                        <h4>회사정보</h4>
                    </div>
                )
            }

export default App;
