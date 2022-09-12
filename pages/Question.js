import { useState } from 'react';
import styles from '../styles/Question.module.css';
import Button from '../components/Button';
import Head from 'next/head';
import { useRouter } from "next/router"
import { questions } from "../src/questions.js"

export default function Question() {
	const [counterYes, setCounterYes] = useState(0);
	const [counterNo, setCounterNo] = useState(0);
	const [question, setQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false)
	const router = useRouter()

	const handleClickOption = (optionIndex) => {
		optionIndex === 0 ? handleYesClick() : handleNoClick()
	}

	const handleYesClick = () => {
		setCounterYes(++counterYes);
		if (counterYes === 8){
			setShowResult(counterYes);
		} else {
			nextQuestion();
		}
	}

	const handleNoClick = () => {
		setCounterNo(counterNo + 1);
		nextQuestion();
	}

	const nextQuestion = () => {
		if (question === (Object.keys(questions).length)-1) {
			handleEndQuestions(question);
		} else {
			setQuestion(question + 1);
		}
	}

	const handleEndQuestions = (num) => {
		router.push({
			pathname: "/Result",
			query: { num }
		});
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<main className={styles.main}>
					{!showResult ? <>
						<h3>{questions[question].title}</h3>
						{/* <p>
							{counterYes}
							<br />
							{counterNo}
							<br />
							{question}
							<br/>
							{Object.keys(questions).length}
						</p> */}
						{questions[question].options.map((label, i) => 
							<Button onClick={() => handleClickOption(i)} title={label} />)
						}
					</> : handleEndQuestions(counterYes)
					}
			</main>
		</div>
	)
}
