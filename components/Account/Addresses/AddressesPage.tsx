import React from "react";
import Head from "next/head";

import { PageTitle } from "../../utils";
import AddressesList from "./AddressesList";

const AddressesPage = () => (
  <>
    <Head>
      <title>Indirizzi | La Mosca Nera</title>
    </Head>
    <PageTitle>I miei indirizzi</PageTitle>
    <AddressesList />
  </>
);

export default AddressesPage;
