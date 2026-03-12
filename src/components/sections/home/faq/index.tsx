"use client";

import { useState } from "react";

import { data, IFaq } from "./data";

import * as S from "./styles";

export function Faq() {
  const [accordion, setAccordion] = useState<Partial<IFaq>>({});

  return (
    <S.Faq>
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <p className="subtitle">Tire suas dúvidas sobre a Telamed e a NR-01</p>

        <div className="accordions">
          {data.map((item) => {
            const isSelected = accordion?.id === item.id;

            return (
              <div key={item.id} className={isSelected ? "open" : ""}>
                <button
                  onClick={() => {
                    setAccordion(isSelected ? {} : item);
                  }}
                >
                  {item?.title}

                  {isSelected ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  )}
                </button>

                <div className="content">
                  <p>{item?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </S.Faq>
  );
}
