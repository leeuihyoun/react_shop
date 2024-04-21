import { Button, Col, Container, Row } from 'react-bootstrap'
import './Detail.css'

export default function DetailPage(props){
	//컴포넌트는 return으로 그린다

	return(
		<>
			<Container>
				<Row>
					<Col>
						<img src='./pizza.jpg' width={'400px'} height={'300px'}></img>
					</Col>
					<Col>
						<h4>{props.items[2].title}</h4>
						<p>{props.items[2].content}</p>
						<p>{props.items[2].price}</p>
						<Button>주문하기</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}