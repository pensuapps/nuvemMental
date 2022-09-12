import Bad from "../components/Bad.js"
import Good from "../components/Good.js"
import Button from "../components/Button.js"
import Head from 'next/head';
import Link from "next/link"

import styles from "../styles/Result.module.css";

export default function Result() {
	const url_string = window.location.href;
	const url = new URL(url_string);
	const result = url.searchParams.get("num");

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
					<Button title="Sim" />
				</Link>
				
				<Link href="/">
					<Button title="Não" />
				</Link>
			</main>
		</div>
	);
}
