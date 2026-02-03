import Link from "next/link";
import Image from "next/image";

import { cards } from "./data";

import * as S from "./styles";

export function InfoBox() {
  return (
    <S.InfoBox>
      <Link href="/" className="logo">
        <Image
          src="/images/logo-footer.png"
          width={280}
          height={96}
          alt="Logo rodape: telamed"
          objectFit="contain"
        />
      </Link>

      <p className="tag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
        Fiscalizações iniciam em <span>Maio/2026</span>
      </p>

      <h2>
        NR-01:
        <br />
        <span>sua empresa está em conformidade?</span>
      </h2>

      <p className="description">
        A NR-01 agora exige que as empresas identifiquem e gerenciem os{" "}
        <strong>riscos psicossociais</strong>. Com a Telamed, além de oferecer
        atendimento em saúde física e mental disponível{" "}
        <strong>24 horas por dia</strong>, sua empresa realiza o{" "}
        <strong>Mapeamento Psicossocial</strong> e acompanha indicadores por
        meio de painéis claros, que apoiam a construção de um plano de ação
        assertivo e facilitam a conformidade com a norma.
      </p>

      <ul>
        {cards.map((item) => (
          <li key={item?.id}>
            <div className="icon" style={{ backgroundColor: item?.bgIcon }}>
              {item?.icon}
            </div>

            <div>
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </S.InfoBox>
  );
}
