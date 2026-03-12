"use client";

import Link from "next/link";

import { ConsultantButton } from "@/components";

import * as S from "./styles";

export function SuccessMessage() {
  return (
    <S.SuccessMessage>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-icon"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </svg>

      <h2>Obrigado!</h2>

      <p className="description">
        Um de nossos consultores entrará em contato em breve.
        <br />
        Se preferir, clique no botão abaixo e fale agora mesmo com um
        especialista.
      </p>

      <ConsultantButton />
    </S.SuccessMessage>
  );
}
