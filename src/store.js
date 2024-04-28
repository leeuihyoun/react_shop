// 리덕스로 state값을 보관할 파일
//props 없이 state 를 공유
// npm install @reduxjs/toolkit react-redux

//1.리덕스 설치
//2. state값을 저장할 store.js를 생성
//3. index.js를 <App/>을 <Provider>로 감싸줌

import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "./data";
//useState ==> createSlice(리덕스)
let slice1 = createSlice({
	name:'이름',
	initialState:'초기값',
	reducers:{
		//리덕스에 등록된 슬라이스 값을 변경하고자 하면 store에서 변경하는 함수로 등록
		// 사용하는 곳에서 그 함수를 사용하는 식으로 변경
		changeData(state, actions){
			return '슬라이스 변경' +state + actions.payload;
		}
	}
})
//slice1을 변경하는 함수를 내보낸다 (useDispatch로 사용)
export let {changeData} = slice1.actions;


let slice2 = createSlice({
	name: 'slice2',
	initialState : data
	
})
export default configureStore({
	reducer:{
		//스테이트(슬라이스)를 다른곳에서 사용할 수 있게 등록하는 곳
		slice1 : slice1.reducer,
		slice2 : slice2.reducer
	}
})