import React, { useState, useEffect } from "react";
import Head from "next/head";
import { PageTitle } from "../../components/utils";
import Sections from "../../components/Structure/Sections";
import FAQSECTIONS, { QUESTIONS } from "../../components/About/FAQ/faqSections";
import FaqQuestions from "../../components/About/FAQ/FaqQuestions";

const Faq = () => {
  const [faqSection, setFaqSection] = useState("Spedition");
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const quest = QUESTIONS.find(x => x.type === faqSection);
    setQuestion(quest);
  }, [faqSection]);

  return (
    <>
      <Head>
        <title>FAQ | La Mosca Nera</title>
      </Head>
      <PageTitle>Domande più frequenti</PageTitle>
      <Sections
        sections={FAQSECTIONS}
        setSection={setFaqSection}
        section={faqSection}
      />

      {question && <FaqQuestions question={question} />}
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {} // will be passed to the page component as props
  };
}

export default Faq;
