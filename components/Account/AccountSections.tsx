import React from "react";
import { FaTruck, FaMapMarkedAlt } from "react-icons/fa";
import OrdersPage from "./Orders/OrdersPage";
import AddressesPage from "./Addresses/AddressesPage";

export default [
  {
    icon: <FaTruck />,
    title: "Ordini",
    description: "Visualizza gli ordini effettuati",
    link: "orders",
    component: <OrdersPage />,
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Indirizzi",
    description: "Modifica i tuoi indirizzi di consegna",
    link: "addresses",
    component: <AddressesPage />,
  },
];
