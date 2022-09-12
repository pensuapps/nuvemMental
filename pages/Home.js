import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import Link from "next/link"

export default function Home () {
	return (
		<div className={styles.container}>
			<Head>
				<title>Brain Fog - Home</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>

			<main className={styles.main}>
				<Image src="/brainfog-logo.png" height="150" width="150"/>
				<h1 className={styles.h1}>
					Bem vindo ao Brain Fog!
				</h1>
				<h3 className={styles.h3}>
					Seu app sobre Nuvem Mental
				</h3>
				<p className={styles.description}>
					Você contraiu COVID, tem percebido confusão mental, falta de foco, problemas de memória e menor clareza de raciocínio? 
				</p>
					
				<p className={styles.description}>
					Podemos te ajudar a identificar sinais e sintomas de "Nuvem Mental", e te ajudar em práticas de saúde que podem incrementar sua qualidade de vida. </p>
				<p className={styles.description}>
					Vamos começar? É bem simples e rápido!
				</p>
				<Link href="/Question">
					<Button title={'Clique aqui para começar'}/>
				</Link>
			</main>
		</div>
	);
}
