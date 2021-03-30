import React from "react";
import { FaTruck, FaMapMarkedAlt } from "react-icons/fa";

export default [
  {
    icon: null,
    iconClass: "fas fa-cut",
    title: "Riparazioni",
    link: "Repairs"
  },
  {
    icon: <FaTruck />,
    title: "Spedizioni",
    link: "Spedition"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Pagamenti",
    link: "Payment"
  }
];

export const QUESTIONS = [
  {
    type: "Repairs",
    title: "Domande sulle riparazioni",
    questions: [
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping is free in the United States, $30 flat rate per order elsewhere. For deliveries outside of the US, additional import duties may be applied upon receipt of your order."
      },
      {
        question: "Why are u ghey?",
        answer: "Because I eat a lot of carrots"
      }
    ]
  },
  {
    type: "Spedition",
    title: "Domande sulle spedizioni",
    questions: [
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping is free in the United States, $30 flat rate per order elsewhere. For deliveries outside of the US, additional import duties may be applied upon receipt of your order."
      },
      {
        question: "Why are u ghey?",
        answer: "Because I eat a lot of carrots"
      }
    ]
  },
  {
    type: "Payment",
    title: "Domande sui pagamenti",
    questions: [
      {
        question: "What currency are your prices listed in?",
        answer: "All of our prices are in Euro (EUR)."
      },
      {
        question: "Why are u ghey?",
        answer: "Because I eat a lot of carrots"
      }
    ]
  }
];
