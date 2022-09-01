import { useState } from 'react';
import styles from '../styles/Question.module.css';
import Button from './Button';
import Head from 'next/head';
import question from "../src/questions.json"

export default function Question () {
	const [counter, setCounter] = useState(0);

	const handleYesClick = () => {
		setCounter(counter + 1);
		counter === 8? counter = 20 : null;
	}

	const handleNoClick = () => {
		null;
	}

	const next = () => {
		null;
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<main>
				<div className={styles.main}>
					<h3 className={styles.h3}>TESTE</h3>
				
					<Button onClick={handleYesClick} title={"Sim"}/>
				
					<Button onClick={handleNoClick} title={'Não'}/>
					<h3>{counter}</h3>
				</div>
			</main>
		</div>
	)	
}
