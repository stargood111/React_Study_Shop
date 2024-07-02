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
function App(){

  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
      <div>

        <Navbar bg="grey" variant="grey">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=> {navigate(-1)}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/detail">Detail</Link>&nbsp;&nbsp;&nbsp;
          <Link to ="/about">About</Link>&nbsp;&nbsp;&nbsp;
          <Routes>
              <Route path="/" element={
                  <>
                  <div className="main-bg">
                  </div>
                  <div className="container">
                    <div className="row">
                      <Modal shoes = {shoes}></Modal>
                    </div>
                  </div>
                 </>
              }>
              </Route>
              <Route path="/detail/:id" element={<Detail shoes ={shoes} />}></Route>
              {/*<Route path="/*" element={<div>잘못된 경로입니다.</div>}></Route>*/}
              {/*<Route path="about" element={<div>어바웃페이지</div>}></Route> //Outlet Hook*/}
              <Route path="/about" element={<About/>}>
                  <Route path="member" element={<About/>}></Route> ///about/member
                  <Route path="location" element={<About/>}></Route> ///about/location
              </Route>
          </Routes>
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
