import * as S from "./styles";

export function OfferBox() {
  return (
    <S.OfferBox>
      <h2>Oferta</h2>

      <ul>
        <li>
          <h3>
            Telamed Colab +<br />
            <span>Mapeamento Psicossocial</span>
          </h3>

          <p>
            <span>Individual:</span> <strong>R$39,90/mês</strong>
          </p>

          <p>
            <span>Familiar:</span> <strong>R$59,90/mês</strong>
          </p>

          <p>
            <span>Mapeamento:</span> <strong>R$10,00 anual</strong>
          </p>
        </li>

        <li>
          <h3>Telamed Colab +</h3>

          <p>
            <span>Individual:</span> <strong>R$39,90/mês</strong>
          </p>

          <p>
            <span>Familiar:</span> <strong>R$59,90/mês</strong>
          </p>
        </li>
      </ul>

      <p className="price-employee">
        Preço por colaborador
        <br />
        Assinatura de 12 meses, com renovação automática
        <br />
        <strong>Fatura mínima: R$99,90</strong>
      </p>

      <div className="buttons">
        <a
          href="https://api.whatsapp.com/send/?phone=554837711004&text=Ol%C3%A1%2C%20vim%20pelo%20site&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
          Falar com Consultor
        </a>

        <a href="tel:4837711004">
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          (48) 3771-1004
        </a>
      </div>
    </S.OfferBox>
  );
}
