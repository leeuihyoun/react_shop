import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row, Nav, Navbar, Button} from 'react-bootstrap'

import DetailPage from './pages/Detail.js';

import{Routes, Route, useNavigate, Outlet, Link} from 'react-router-dom';

import './App.css';
//자바스크립트 파일은 확장자명을 생략
import data from './data.js'
import {num1} from './data.js'
//다른 자바스크립트에서 export 한건 import로 가져와서 사용
//이미지 사용하려면 import
import mainBG from './backs.jpg'
import { useState } from 'react';
import Cart from './pages/Cart.js';


//라우터는 창을 새로 불러오는게 아니라 재렌더링 방식을 사용
function App() {
  // css를 제공해주는 사이트 : bootstrap
  // npm install react-bootstrap bootstrap
  let [items,setItemss] = useState(data);
  let [photo, setPhoto] = useState(['/cupcake.jpg','/pancake.jpg','/pizza.jpg','/logo192.png']);
  let navigate = useNavigate()
  
  return (

    <div className="App">
         
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img src={'/logo192.png'} width={'50px'} height={'50px'}></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/Cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<>
            <div className={'main-bg'}> </div>
          <Container>
            <Row>
                {items.map((item, index) => (
                <ItemCol key={index} data={item} img={photo[index]} />
             ))}
            </Row>
            <Button variant="primary">Primary</Button>{' '}
</Container>



        </>}>
        </Route>
        {/* :id ==> URL파라미터(변수)를 통해서 상세아이템 변경 */}
        <Route path='/detail/:id'element={<DetailPage items={items} img ={photo}/>}></Route>
        {/* <Route path='/detail/:id'element={<DetailPage items={items} id ={1} img ={photo}/>}></Route>
        <Route path='/detail/:id'element={<DetailPage items={items} id ={2} img ={photo}/>}></Route> */}
        <Route path='/about'element={<AboutPage/>}>
        <Route path='address' element = {<div>주소</div>}></Route>
        <Route path='location' element = {<div>위치</div>}></Route>  
        </Route>
        <Route path='/about/member'element={<div>어바웃 멤버 페이지</div>}>
       
        </Route>
        <Route path='/Cart'element={<Cart/>}></Route>
        <Route path='*'element={<div>그 외의 페이지(404)</div>}></Route>

      </Routes>
      {/*리액튼느 하나의 html을 다시 그리는 방식이기 때문에 html을 이동하는 <a>태그 보다는 <Link>를 사용 */}
        <Link to="/about/address"><Button variant='warning'>리엑트 부트스트랩</Button></Link>
        <a href='/about/location'>로케이션 페이지로</a>
      
     
    </div>
     
    
  );
}

export default App;

function AboutPage(){
  return(
    <>
      <dvi>
        <h4>
          어바웃 페이지
          <Outlet/>
        </h4>
      </dvi>
    </>
  )
}

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


{/* <div style={{backgroundImage:`url(/cupcake.jpg) `,height:'300px',width:'100%', backgroundSize:'cover',
  backgroundPosition: 'center'}}></div>  */}