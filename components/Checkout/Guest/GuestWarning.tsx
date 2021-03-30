import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { styles } from "../../utils";
import { LOGIN } from "../../../constants/routes";

const GuestWarning = () => (
  <GuestWarningWrapper>
    Procedendo effettuerai l'acquisto come ospite, non potendo tenere traccia
    dei tuoi ordini. <br />
    Registrandoti invece potrai usufruire di <strong>buoni sconti</strong> e
    tenere traccia di tutti i tuoi ordini.
    <br />
  </GuestWarningWrapper>
);

const GuestWarningWrapper = styled.div`
  background-color: ${styles.colors.warningColor};
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;

  a {
    font-weight: bold;
  }
`;

export default GuestWarning;
