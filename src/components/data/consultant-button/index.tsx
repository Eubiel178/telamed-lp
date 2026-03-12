import * as S from "./styles";

export function ConsultantButton() {
  return (
    <S.ConsultantButton
      href="https://wa.me/554837711004?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor."
      target="_blank"
      rel="noopener noreferrer"
      className="whats"
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
      Falar com um consultor
    </S.ConsultantButton>
  );
}
