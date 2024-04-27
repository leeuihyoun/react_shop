import { Button, Col, Container, Row } from 'react-bootstrap'
import './Detail.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DetailPage(props){
	//컴포넌트는 return으로 그린다
	//URL 파라미터를 useParams()로 받는다 (상세페이지의 id 번호) 0,1,2
	let{id}= useParams()
	// 선택된 아이템인지 식별 (items의 id와 URL파라미터의 id가 같은지 검사)
	let selectedItem = props.items.find((e) => {
		return e.id ==id
	})
	let [hideDom, setHideDom] = useState(false)

	//useEffect : 오래 걸리는 작업을 처리할 때
	//리액트의 컴포넌트 라이프사이클 (생성될때, 갱신될때, 없어 질때)
	//mount : 생성될때, update : 갱신될때 , unmount : 없어질때
	useEffect(()=>{
		// mount 와 update시에 실행될 코드
		//html을 먼저 보여주고 오래 걸리는 작업을 처리(서버요청 등...)
		
		console.log('mount')
		setTimeout(()=>{
			//2초후에 동작할 코드

			setHideDom(true)
		},2000)
		//unmount에 대해서는 return에 작성
		return(()=>
		{
			console.log('unmount')
		})
	})

	return(
		<>
			<Container>
				{
					hideDom === false ? (
					<div>hello</div>)
					:null
				}
				<Row>
					<Col>
						<img src={props.img[selectedItem.id]} width={'400px'} height={'300px'}></img>
					</Col>
					<Col>
						<h4>{selectedItem.title}</h4>
						<p>{selectedItem.content}</p>
						<p>{selectedItem.price}</p>
						<Button>주문하기</Button>
					</Col>
				</Row>
			</Container>
		</>
	)
}