import React from "react";

export default function App() {
	const parag1 = {
		color: "red",
		fontFamily: "Trebuchet",
		fontSize: "1em",
		letterSpacing: "5px",
		textIndent: "50px",
	};
	const parag2 = {
		color: "blue",
		fontFamily: "Trebuchet",
		fontSize: "1em",
		letterSpacing: "5px",
		textIndent: "50px",
	};
	return (
		<>
			<h1 style={{ fontSize: "2em", color: "a5a5a5" }}>Iniciando estudos com state</h1>
			<div>
				<p style={parag1}>Rosas são vermelhas</p>
				<p style={parag2}>Violetas são azuis</p>
			</div>
		</>
	);
}
