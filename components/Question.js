import { useState } from 'react';
import styles from '../styles/Question.module.css';
import Button from './Button';

const question = [
	'Nos últimos meses, você notou diminuição na velocidade de raciocínio e resolução de problemas do dia a dia?',
	'Nos últimos meses, você tem notado dificuldade de aprendizagem de coisas novas?',
	'Nos últimos meses, você tem notado dificuldade para concluir uma atividade que iniciou no dia a dia?',
	'Você tem notado dificuldade de manter concentração e foco no que faz?',
	'Você tem percebido falhas de memória recentes (esquecer o que ia fazer no meio do caminho,  datas, compromissos)?',
	'Você tem notado esquecimento de palavras, e se perde no que ia falar?',
	'Você tem sofrido com dores de cabeça? ',
	'Você tem se distraído, e se perde no que estava fazendo?',
	'Você tem dificuldade de fazer mais de uma coisa ao mesmo tempo?',
	'Sua capacidade de fazer tarefas em equipe como está?',
	//Botões interativos:  Boa, me saio bem     Ruim, difícil me organizar com o grupo
	'Você sente que tem procrastinado (deixado tudo para fazer depois, e em cima da hora)?',
	'Você acha que está com sensação de preocupação constante?',
	'Você sente que está com falta de paciência, ultimamente?',
	'Você acha que tem que pensar demais para tomar decisões?',
	'Você sente que a qualidade do seu sono está pouco satisfatória?',
	'Sente ou sentiu atordoado(a) ou tonto(a), ultimamente?',
	'Sente ou sentiu sem equilíbrio, como se fosse cair?',
	'Você sente que se cansa com facilidade?',
	'Sente-se cansado(a)o tempo todo, e já acorda cansado(a)?',
	'Você sente que tem dificuldade de pensar com clareza?'
]

export default function Question () {
	const [counter, setCounter] = useState(0);

	const handleYesClick = () => {
		setCounter(counter + 1);
	}

	const handleNoClick = () => {
		null;
	}

	const next = () => {
		
	}

	return (
		<div className={styles.container}>
			<main>
				<div className={styles.main}>
					<h1 className={styles.h1}>{question[counter]}</h1>
				
					<Button onClick={handleYesClick} title={'Sim'}/>
				
					<Button onClick={handleNoClick} title={'Não'}/>
					<h3>{counter}</h3>
				</div>
			</main>
		</div>
	)	
}
