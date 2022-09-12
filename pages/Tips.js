import Button from "../components/Button.js"
import Head from 'next/head';
import Link from "next/link"

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
					<iframe width="320" height="180" src="https://www.youtube-nocookie.com/embed/7WetVUOSfm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
					</iframe>

				<p>
					Agradecemos a sua participação, busque hábitos saudáveis,  lembre-se de que você é muito importante, e deve se cuidar!
				</p>

				<Link href="https://pebmed.com.br/brain-fog-no-pos-covid-19-uma-epidemia/">
					<Button title="Ver mais sobre Núvem Mental"/>
				</Link>

				<Link href="/">
					<Button title="Voltar ao início" />
				</Link>
			</main>
		</div>
	);
}