import Bad from "../components/Bad.js"
import Good from "../components/Good.js"
import Button from "../components/Button.js"
import Head from 'next/head';
import Link from "next/link"
import { useRouter } from 'next/router'
import { event } from '../lib/ga';
import styles from "../styles/Result.module.css";

export default function Result() {
	// const url_string = window.location.href;
	// const url = new URL(url_string);
	// const result = url.searchParams.get("num");
	const { query } = useRouter()

	const result = query.num
	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog - Resultado</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<main className={styles.main}>
				<h1>Resultado</h1>
				{result == 8 ? <Bad /> : <Good />}
				<Link href="/Tips">
					<Button title="Sim" onClick={() => {
						event({
							action: 'tips_button_click',
							category: 'Tips',
							label: 'Ir para dicas',
							value: 'Ir para dicas'
						})
					}}/>
				</Link>
				
				<Link href="/">
					<Button title="Não" onClick={() => {
						event({
							action: 'result_to_home_button_click',
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
