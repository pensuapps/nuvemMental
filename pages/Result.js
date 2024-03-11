import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Result.module.css";

import Bad from "../components/Bad.js";
import Good from "../components/Good.js";
import Button from "../components/Button.js";
import { event } from "../lib/ga";

export default function Result() {
  function handleGA({ action, category, label, value }) {
    if (window.location.hostname === "localhost") {
      return;
    }

    event({
      action,
      category,
      label,
      value,
    });
  }
  const { query } = useRouter();
  const result = query.num;

  return (
    <div className={styles.container}>
      <Head>
        <title>Brain Fog - Resultado</title>
        <link rel="icon" href="/brainfog-logo.png" />
      </Head>
      <main className={styles.main}>
        <h1>Resultado:</h1>
        {result == 8 ? <Bad /> : <Good />}
        <Link href="/Tips">
          <Button
            title="Sim"
            onClick={() => {
              handleGA({
                action: "result_to_tips_button_click",
                category: "Tips",
                label: "Ir para dicas",
                value: "Ir para dicas",
              });
            }}
          />
        </Link>

        <Link href="/">
          <Button
            title="Não"
            onClick={() => {
              handleGA({
                action: "result_to_home_button_click",
                category: "Home",
                label: "Voltar ao início",
                value: "Voltar ao início",
              });
            }}
          />
        </Link>
      </main>
    </div>
  );
}
