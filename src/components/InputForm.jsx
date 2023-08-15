import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

	const [inputText, setInputText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("a");
		// inputに打ち込んだ文字をコンソールに出力したい
		// console.log(inputText);

		// タスクを追加する
		setTaskList([
			...taskList,
			{
				id: taskList.length, 
				text: inputText,
				completed: false
			}
		]);
		// console.log(taskList);

		// 入力した文字の初期化
		setInputText("")
	}

	const handleChange = (e) => {
		setInputText(e.target.value);
		// console.log(inputText); // 逐次的
	}

  	return (
  		<div className="inputForm">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} value={inputText}/>
				<button>
				<i className="fa-regular fa-square-plus"></i>
				</button>
			
			</form>
		</div>
  	)
}
