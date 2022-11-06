import { useState } from 'react';
import styles from '../styles/Question.module.css';
import Button from '../components/Button';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from "next/router"
import { questions } from "../src/questions.js"
import { event } from '../lib/ga';

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
		event({
			action: 'question_yes_click',
			category: 'Question',
			label: 'Clique em sim',
			value: 'Clique em sim'
		})
		if (counterYes === 8){
			setShowResult(counterYes);
		} else {
			nextQuestion();
		}
	}

	const handleNoClick = () => {
		setCounterNo(counterNo + 1);
		event({
			action: 'question_no_click',
			category: 'Question',
			label: 'Clique em não',
			value: 'Clique em não'
		})
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
						<Image src={questions[question].image} height="150" width="150" className={styles.image}/>
						<h3>{questions[question].title}</h3>
						{questions[question].options.map((label, i) => 
							<Button key={i} onClick={() => handleClickOption(i)} title={label} />)
						}
					</> : handleEndQuestions(counterYes)
					}
			</main>
		</div>
	)
}