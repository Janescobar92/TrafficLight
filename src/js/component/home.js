import React, { useState } from "react";

//include images into your bundle
import { TrafficLigths } from "./ligth.jsx";
//create your first component
export function Home() {
	const [redColor, setRedColor] = useState("");
	const [yellowColor, setYellowColor] = useState("");
	const [greenColor, setGreenColor] = useState("");

	return (
		<div className="rounded bg-dark box">
			<div
				className={"rounded-circle light " + redColor}
				onClick={() => {
					setRedColor("bg-danger");
					setYellowColor("");
					setGreenColor("");
				}}>
				<TrafficLigths />
			</div>
			<div
				className={"rounded-circle light " + yellowColor}
				onClick={() => {
					setYellowColor("bg-warning");
					setRedColor("");
					setGreenColor("");
				}}>
				<TrafficLigths />
			</div>
			<div
				className={"rounded-circle light " + greenColor}
				onClick={() => {
					setRedColor("");
					setYellowColor("");
					setGreenColor("bg-success");
				}}>
				<TrafficLigths />
			</div>
		</div>
	);
}
