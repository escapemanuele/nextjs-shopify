import React from "react";
import { Button, styles } from "../../utils";
import styled from "styled-components";

const ContactsButtons = () => {
  return (
    <ContactsButtonsWrapper>
      <ContactsItem>
        <div>CHIAMAMI</div>
        <Button title="Chiamami sul telefono" href="tel:+393515595121">
          <i className="socialIcons fa fa-phone" aria-hidden="true"></i>
          CHIAMA
        </Button>
      </ContactsItem>
      <ContactsItem>
        <div>SCRIVIMI SU INSTAGRAM</div>
        <Button
          title="Scrivmi su instagram!"
          href="https://www.instagram.com/la.moscanera/"
          target="_blank"
          color="instagram"
        >
          <i className="socialIcons fab fa-instagram" />
          INSTAGRAM
        </Button>
      </ContactsItem>
      <ContactsItem>
        <div>SCRIVIMI SU WHATSAPP</div>
        <Button
          color="whatsapp"
          target="_blank"
          title="Scrivimi su whatsapp!"
          href="https://web.whatsapp.com/send?phone=+393515595121&amp;text=Ciao! Avrei un lavoro da farti fare!"
        >
          <i className="socialIcons fab fa-whatsapp" />
          SCRIVIMI
        </Button>
      </ContactsItem>
    </ContactsButtonsWrapper>
  );
};

const ContactsButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const ContactsItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;

  div {
    flex: 1;
  }
  a {
    flex: 1;
  }

  .socialIcons {
    font-size: 20px !important;
    margin-right: 1rem;
    position: relative;
  }

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: column;
  }
`;

export default ContactsButtons;
