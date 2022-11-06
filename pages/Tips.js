import Button from "../components/Button.js"
import Head from 'next/head';
import Link from "next/link"
import { event } from '../lib/ga';

import styles from "../styles/Tips.module.css";

export default function Tips() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog - Resultado</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<main className={styles.main}>
				<h1>Dicas</h1>
				<p>
					Para saber mais, assista o vídeo abaixo.
				</p>

				{/* Ajustar tamanho do iframe */}
					<iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/7WetVUOSfm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
					</iframe>

				<p>
					Agradecemos a sua participação, busque hábitos saudáveis,  lembre-se de que você é muito importante, e deve se cuidar!
				</p>

				<Link href="https://pebmed.com.br/brain-fog-no-pos-covid-19-uma-epidemia/">
					<Button title="Ver mais sobre Nuvem Mental" onClick={() => {
						event({
							action: 'more_tips_button_click',
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
			</main>
		</div>
	);
}