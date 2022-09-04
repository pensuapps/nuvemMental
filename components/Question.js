import { useState } from 'react';
import styles from '../styles/Question.module.css';
import Button from './Button';
import Head from 'next/head';
import { questions } from "../src/questions.js"

export default function Question () {
	const [counterYes, setCounterYes] = useState(0);
	const [counterNo, setCounterNo] = useState(0);
	const [question, setQuestion] = useState(0);

	const handleYesClick = () => {
		setCounterYes(counterYes + 1);
		if (counterYes === 8) 
		handleEndQuestions(counterYes);
		nextQuestion();
	}
	
	const handleNoClick = () => {
		setCounterNo(counterNo + 1);
		nextQuestion();
	}
	
	const nextQuestion = () => {
		setQuestion(question+1);
		if (question === 20)
			handleEndQuestions(question);
	}

	const handleEndQuestions = (num) => {
		num === 8? <Bad/> : <Good/>;
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<main>
				<div className={styles.main}>
					{questions.map(query => {
						return(
							<>
								<h3 className={styles.h3}>
									{query.title}
								</h3>
							
								<Button onClick={handleYesClick} title={query.options[0]}/>
							
								<Button onClick={handleNoClick} title={query.options[1]}/>
								<p>
									{question}
									<br/>
									{counterYes}
									<br/>
									{counterNo}
								</p>
							</>
						);
					})}
				</div>
			</main>
		</div>
	)	
}
