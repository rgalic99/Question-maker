import { useState } from "react";
import "./App.css";

function App() {
	const [textData, setTextData] = useState("");
	const [question, setQuestion] = useState("");
	const [answer1, setAnswer1] = useState("");
	const [answer2, setAnswer2] = useState("");
	const [answer3, setAnswer3] = useState("");
	const [answer4, setAnswer4] = useState("");
	return (
		<>
			<section className="center">
				<h1>Dobrodošli u generator pitanja</h1>
				<form
					className="box"
					id="form"
					onSubmit={(e) => {
						e.preventDefault();
						const incorrect = [];
						incorrect.push(`"${answer2}"`);
						incorrect.push(`"${answer3}"`);
						incorrect.push(`"${answer4}"`);

						const q = `${
							textData === "" ? "            " : "\n            "
						}{
            "question": "${question}",
            "correct_answer": "${answer1}",
            "incorrect_answers": [${incorrect}],
            },`;

						setTextData(textData + q);
						document.getElementById("form").reset();
						document.getElementById("Question").focus();
						document.getElementById("Question").select();
					}}
				>
					<input
						type="text"
						className="field"
						id="Question"
						placeholder="Pitanje"
						onChange={(e) => setQuestion(e.target.value)}
					></input>
					<input
						type="text"
						className="field"
						id="Answer1"
						placeholder="Odgovor 1 (Točni)"
						onChange={(e) => setAnswer1(e.target.value)}
					></input>
					<input
						type="text"
						className="field"
						id="Answer2"
						placeholder="Odgovor 2"
						onChange={(e) => setAnswer2(e.target.value)}
					></input>
					<input
						type="text"
						className="field"
						id="Answer3"
						placeholder="Odgovor 3"
						onChange={(e) => setAnswer3(e.target.value)}
					></input>
					<input
						type="text"
						className="field"
						id="Answer4"
						placeholder="Odgovor 4"
						onChange={(e) => setAnswer4(e.target.value)}
					></input>
					<span className="row">
						<input
							type="submit"
							className="submit field"
							id="Submit"
							value="Dodaj"
						></input>
						<button
							className="copy field"
							type="button"
							onClick={() => {
								navigator.clipboard.writeText(textData);
							}}
						>
							<i className="far fa-clipboard"></i>
						</button>
					</span>
				</form>
			</section>
			<section className="center">
				<textarea
					className="textField"
					defaultValue={textData}
				></textarea>
			</section>
		</>
	);
}

export default App;
