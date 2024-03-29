import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../styles/Question.module.css";

import Button from "../components/Button";
import { questions } from "../src/questions.js";
import { event } from "../lib/ga";

export default function Question() {
  const [counterYes, setCounterYes] = useState(0);
  const [counterNo, setCounterNo] = useState(0);
  const [question, setQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const handleClickOption = (optionIndex) => {
    optionIndex === 0 ? handleYesClick() : handleNoClick();
  };

  const handleYesClick = () => {
    setCounterYes(++counterYes);
    handleGA({
      action: "question_yes_click",
      category: "Question",
      label: "Clique em sim",
      value: "Clique em sim",
    });
    if (counterYes === 8) {
      setShowResult(counterYes);
    } else {
      nextQuestion();
    }
  };

  function handleGA({ action, category, label, value }) {
    if (window.location.hostname !== "localhost") {
      event({
        action,
        category,
        label,
        value,
      });
    }
  }

  const handleNoClick = () => {
    setCounterNo(counterNo + 1);
    handleGA({
      action: "question_no_click",
      category: "Question",
      label: "Clique em não",
      value: "Clique em não",
    });
    nextQuestion();
  };

  const nextQuestion = () => {
    if (question === Object.keys(questions).length - 1) {
      handleEndQuestions(question);
    } else {
      setQuestion(question + 1);
    }
  };

  const handleEndQuestions = (num) => {
    router.push({
      pathname: "/Result",
      query: { num },
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Brain Fog</title>
        <link rel="icon" href="/brainfog-logo.png" />
      </Head>
      <main className={styles.main}>
        {!showResult ? (
          <>
            <Image
              src={questions[question].image}
              height="150"
              width="150"
              className={styles.image}
            />

            <h3>{questions[question].title}</h3>

            <div className={styles.buttonsContainer}>
              {questions[question].options.map((label, i) => (
                <Button
                  key={i}
                  onClick={() => handleClickOption(i)}
                  title={label}
                  variant="secondary"
                />
              ))}
            </div>
          </>
        ) : (
          handleEndQuestions(counterYes)
        )}
      </main>
    </div>
  );
}
