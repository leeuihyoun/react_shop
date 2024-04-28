import { Button, Table } from 'react-bootstrap'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeData } from '../store'

export default function Cart(){
	//등록된 슬라이스를 갖다 쓴다.(리덕스)
	let slice1 = useSelector((state)=>{return state})
	console.log(slice1.slice1);
	let slice2 = useSelector((state) => {return state.slice2 })
	console.log(slice2);
	let dispatch = useDispatch();
	console.log(slice1.slice1);
	return(
		//리덕스 슬라이스 변경 기능 변수화
		
		<div>
			<Button onClick={()=>{dispatch(changeData('2'))}}>슬라이스1 변경</Button>
			<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>개수</th>
          <th>추가</th>
        </tr>
      </thead>
      <tbody>
       
					{slice2.map((e,idx)=>{
						return(	
						<tr>
						 <td>{idx}</td>
						 <td>{e.title}</td>
						 <td>{e.content}</td>
						 <td>1</td>
						 <td><Button>+</Button></td>
						 </tr>

						)
					})}
         
       
    
       
      </tbody>
    </Table>
		</div>
	)
}