import Link from "next/link";
import Image from "next/image";

import * as S from "./styles";

export function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo-footer.png"
              width={116}
              height={40}
              alt="Logo rodape: telamed"
              objectFit="contain"
            />
          </Link>

          <p>Saúde completa na palma da mão.</p>
        </div>

        <div className="contact">
          <h3>Contato</h3>

          <Link href="tel:4837711004" target="_blank" className="underline">
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>(48) 3771-1004</span>
          </Link>

          <Link
            href="mailto:contato@telamedsaude.com.br"
            target="_blank"
            className="underline"
          >
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
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>contato@telamedsaude.com.br</span>
          </Link>

          <Link
            href="https://www.telamed.com.br"
            target="_blank"
            className="underline"
          >
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <span>https://www.telamed.com.br</span>
          </Link>
        </div>

        <div className="copright">
          <p>
            © 2026 Telamed.
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </S.Footer>
  );
}
