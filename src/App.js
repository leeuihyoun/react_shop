import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row, Nav, Navbar, Button} from 'react-bootstrap'

import './App.css';
//자바스크립트 파일은 확장자명을 생략
import data from './data.js'
import {num1} from './data.js'
//다른 자바스크립트에서 export 한건 import로 가져와서 사용
//이미지 사용하려면 import
import mainBG from './backs.jpg'
import { useState } from 'react';



function App() {
  // css를 제공해주는 사이트 : bootstrap
  // npm install react-bootstrap bootstrap
  let [items,setItemss] = useState(data);
  let [photo, setPhoto] = useState(['/cupcake.jpg','/pancake.jpg','/pizza.jpg']);

  
  return (
    <div className="App">
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={'/logo192.png'} width={'50px'} height={'50px'}></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       <div className={'main-bg'}>

      </div>
      <Container>
        <Row>
          
        {items.map((item, index) => (
            <ItemCol key={index} data={item} img={photo[index]} />
         ))}
        </Row>
        <Row>
          <Col>
          4
          </Col>
          <Col>5</Col>
          <Col>6</Col>
        </Row>
      </Container>
      {/* <div style={{backgroundImage:`url(/cupcake.jpg) `,height:'300px',width:'100%', backgroundSize:'cover',
        backgroundPosition: 'center'}}></div>  */}

      <Button variant="primary">Primary</Button>{' '}
     
    </div>
    
       
    
  );
}

export default App;

//컴포넌트는 맨 앞글자는 대문자
//return에 html(jsx) 코드
// 컴포넌트로 분리를 했으면 props로 받아와야하는 부분을 변경
function ItemCol(props){
  return(
    <>
        <Col>
          <img src={props.img} width={'300px'} height={'300px'}/>
          <h4>{props.data.title}</h4>
          <p>{props.data.price}원</p>
          </Col>
    </>
  )
}