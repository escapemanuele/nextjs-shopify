import React from "react";
import Head from "next/head";
import HowItWorksOnline from "../../components/About/HowItWorks/HowItWorksOnline";
import HowItWorksOffline from "../../components/About/HowItWorks/HowItWorksOffline";
import styled from "styled-components";

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>Come funziona | La Mosca Nera</title>
      </Head>
      <IntroductionWrapper>
        Nel mio laboratorio effettuo{" "}
        <strong>riparazioni di quasi ogni tipo</strong> (per l’impossibile mi
        sto attrezzando) per i tuoi capi d’abbigliamento, dando così loro una
        seconda possibilità di mettersi in mostra.
      </IntroductionWrapper>

      <HowItWorksOnline />
      <HowItWorksOffline />
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {} // will be passed to the page component as props
  };
}

const IntroductionWrapper = styled.div`
  font-size: 1.3rem;
`;

export default HowItWorks;
