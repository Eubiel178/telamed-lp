import Link from "next/link";
import styled from "styled-components";

export const ConsultantButton = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 600;

  padding: 12px 24px;
  border-radius: 12px;

  text-decoration: none;

  transition: var(--transition);

  color: var(--grey);
  background: rgb(18 221 197);

  &:hover {
    opacity: 0.85;
    background-color: rgb(16 199 178);
  }

  svg {
    width: 19.99px;
    height: auto;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
  }
`;
