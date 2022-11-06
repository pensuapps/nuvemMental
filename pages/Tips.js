import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Tips.module.css';

import Button from '../components/Button.js';
import { tips } from '../src/tips.js';
import { event } from '../lib/ga';

export default function Tips() {
	const [counterOkOption, setCounterOkOption] = useState(0);
	const [counterIDoOption, setCounterIDoOption] = useState(0);
	const [counterTryOption, setCounterTryOption] = useState(0);
	const [tip, setTip] = useState(0);
	const [end, setEnd] = useState(false);

	const handleClickOption = (optionIndex) => {
		if (optionIndex === 0) handleOkClick();
		else if (optionIndex === 1) handleIDoClick();
		else if (optionIndex === 2) handleTryClick();
		else handleEndClick();
	}

	const handleOkClick = () => {
		setCounterOkOption(++counterOkOption);
		event({
			action: 'tips_ok_click',
			category: 'Tips',
			label: 'Clique em ok',
			value: 'Clique em ok'
		});
		nextTips();
	}

	const handleIDoClick = () => {
		setCounterIDoOption(++counterIDoOption);
		event({
			action: 'tips_i_do_click',
			category: 'Tips',
			label: 'Clique em eu faço',
			value: 'Clique em eu faço'
		});
		nextTips();
	}

	const handleTryClick = () => {
		setCounterTryOption(++counterTryOption);
		event({
			action: 'tips_try_click',
			category: 'Tips',
			label: 'Clique em vou tentar',
			value: 'Clique em vou tentar'
		});
		nextTips();
	}

	const handleEndClick = () => {
		setEnd(true);
	}
	
	const nextTips = () => {
		if (tips === (Object.keys(tips).length)-1) {
			handleEndClick();
		} else {
			setTip(tip + 1);
		}
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog - Dicas</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<main className={styles.main}>
				<h1>Dicas</h1>
				{!end ? <>
					<Image src={tips[tip].image} width={150} height={150} className={styles.image}/>
					<h3>{tips[tip].title}</h3>
						{tips[tip].options.map((label, i) => 
							<Button key={i} onClick={() => handleClickOption(i)} title={label} />)
						}
					</> : <>
					<Image src="/brainfog-logo.png" width={150} height={150} className={styles.image}/>
					<p>
						Para saber mais, assista o vídeo abaixo.
					</p>

					{/* Ajustar tamanho do iframe */}
						<iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/7WetVUOSfm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
						</iframe>

					<p>
						Agradecemos a sua participação! Busque hábitos saudáveis, lembre-se de que você é muito importante e deve se cuidar!
					</p>

					<Link href="https://pebmed.com.br/brain-fog-no-pos-covid-19-uma-epidemia/">
						<Button title="Leia um artigo sobre Nuvem Mental" onClick={() => {
							event({
								action: 'article_button_click',
								category: 'Tips',
								label: 'Dicas',
								value: 'Dicas'
							})
						}}/>
					</Link>

					<Link href="/">
						<Button title="Voltar ao início" onClick={() => {
							event({
								action: 'tips_to_home_button_click',
								category: 'Home',
								label: 'Voltar ao início',
								value: 'Voltar ao início'
							})
						}}/>
					</Link>
					</>
				}
			</main>
		</div>
	);
}
