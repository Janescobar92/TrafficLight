import React, { useState } from "react";

//include images into your bundle
import { TrafficLigths } from "./ligth.jsx";
//create your first component
export function Home() {
	const [redColor, setRedColor] = useState("");
	const [yellowColor, setYellowColor] = useState("");
	const [greenColor, setGreenColor] = useState("");

	return (
		<div className="d-flex justify-content-center my-5">
			<div className="box">
				<div
					className={"rounded-circle lightA " + redColor}
					onClick={() => {
						setRedColor("bg-danger");
						setYellowColor("");
						setGreenColor("");
					}}>
					<TrafficLigths />
				</div>
				<div
					className={"rounded-circle lightB " + yellowColor}
					onClick={() => {
						setYellowColor("bg-warning");
						setRedColor("");
						setGreenColor("");
					}}>
					<TrafficLigths />
				</div>
				<div
					className={"rounded-circle lightC " + greenColor}
					onClick={() => {
						setRedColor("");
						setYellowColor("");
						setGreenColor("bg-success");
					}}>
					<TrafficLigths />
				</div>
			</div>
		</div>
	);
}
