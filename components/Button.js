import styles from '../styles/Button.module.css';

export default function Button ({ title, onClick }) {
	return (
		<button className={styles.button} onClick={onClick}>
			{title}
		</button>
	);
}
