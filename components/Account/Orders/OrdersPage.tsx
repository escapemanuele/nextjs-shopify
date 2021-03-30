import React from "react";
import Head from "next/head";
import { useQuery } from "react-apollo";
import OrdersList from "./OrdersList";
import { BouncingLoader, PageTitle } from "../../utils";
import useOrders from "../../../frontend-structure/order/hooks/useOrders";

const OrdersPage = () => {
  const [data, loading] = useOrders();

  return (
    <>
      <Head>
        <title>Ordini | La Mosca Nera</title>
      </Head>
      <PageTitle>I miei ordini</PageTitle>
      {!data || loading ? (
        <BouncingLoader />
      ) : (
        <OrdersList orders={data.getUserOrders} />
      )}
    </>
  );
};

export default OrdersPage;
