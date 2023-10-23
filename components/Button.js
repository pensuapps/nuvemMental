import styles from "../styles/Button.module.css";

export default function Button({ title, onClick, variant, marginTopAuto }) {
  const buttonVariants = {
    primary: styles.primary,
    secondary: styles.secondary,
  };

  return (
    <button
      className={`
				${buttonVariants[variant]} 
				${styles.button} 
				}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
