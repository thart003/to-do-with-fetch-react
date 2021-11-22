import React from "react";
import PropTypes from "prop-types";

export function ToDo(props) {
	const [task, setTask] = React.useState("");
	const [list, setList] = React.useState([]);

	return (
		<div className="container">
			<div>
				<h1 className="title">To-Do List</h1>
			</div>
			<div className="app">
				<input
					className="input"
					type="text"
					onChange={e => setTask(e.target.value)}
					value={task}
					onKeyDown={e => {
						if (e.key === "Enter") {
							const newList = list.concat([task]);
							setList(newList);
							setTask("");
						}
					}}
				/>
				<ul id="horizontal-list">
					{list.map((item, index) => {
						return (
							<li className="listItem" key={index}>
								{item}
								<button
									className="removeBtn"
									onClick={() => {
										const newList = list.filter((e, i) => {
											return i !== index;
										});
										setList(newList);
									}}>
									{" "}
									Remove
								</button>
							</li>
						);
					})}
					<p className="paper">{`There are ${list.length} items left`}</p>
				</ul>
			</div>
		</div>
	);
}
