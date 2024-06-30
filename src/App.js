import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useState} from "react";
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'
import Detail from './Detail.js'
function App(){

  let [shoes] = useState(data);

  return (
      <div>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
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
              <Route path="/detail" element={<Detail/>}>
              </Route>
              <Route path="about" element={<div>어바웃페이지</div>}></Route>
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

export default App;
