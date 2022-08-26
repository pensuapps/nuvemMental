import { useEffect, useState } from "react";
import style from "../styles/Loading.module.css";
import Image from 'next/image';
import Head from 'next/head';

const MIN_OPACITY = 75;
const MAX_OPACITY = 100;
const FACTOR_CHANGE = -2;
const FPS = 1000/24;

export default function Loading () {
	const [ opacity, setOpacity ] = useState(MIN_OPACITY);
	
	useEffect(() => {
		let signal = 1;

		const interval = setInterval(() => {
			if (opacity <= MIN_OPACITY || opacity >= MAX_OPACITY) 
				signal *= -1;
			opacity += signal * FACTOR_CHANGE;
			
			setOpacity(opacity);
		}, FPS);
		
		return () => clearInterval(interval);
	}, []);

	return (
		<div style={{ opacity: opacity/100 }} className={style.loading}>
			<Head>
				<title>Brain Fog</title>
				<link rel="icon" href="/brainfog-logo.png" />
			</Head>
			<Image src="/brainfog-logo.png" height="150" width="150" className={style.image}/>
		</div>
	);
}
