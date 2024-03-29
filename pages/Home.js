import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import Button from "../components/Button";
import { event } from "../lib/ga";

export default function Home() {
  function handleGoogleAnalytics() {
    if (window.location.hostname === "localhost") {
      return;
    }

    event({
      action: "start",
      category: "Start",
      label: "Clique aqui para começar",
      value: "Clique aqui para começar",
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Brain Fog - Home</title>
        <link rel="icon" href="/brainfog-logo.png" alt="" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/brainfog-logo.png"
          height="192"
          width="192"
          min-width="192"
          min-height="192"
          alt="Brain Fog logo app"
        />
        <h1 className={styles.h1}>Bem-vindo ao Brain Fog!</h1>
        <h3 className={styles.h3}>Seu app sobre Nuvem Mental</h3>
        <p className={styles.description}>
          Você contraiu covid, tem percebido confusão mental, falta de foco,
          problemas de memória e menor clareza de raciocínio?
        </p>

        <p className={styles.description}>
          Podemos te ajudar a identificar sinais e sintomas de Nuvem Mental, e
          te ajudar em práticas de saúde que podem incrementar sua qualidade de
          vida.{" "}
        </p>
        <p className={styles.description}>
          Vamos começar? É bem simples e rápido!
        </p>
        <Link href="/Question">
          <Button
            title={"Clique aqui para começar"}
            onClick={handleGoogleAnalytics}
            variant="primary"
          />
        </Link>
      </main>
    </div>
  );
}
