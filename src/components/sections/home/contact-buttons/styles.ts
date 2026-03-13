import styled from "styled-components";

export const ContactButtons = styled("section")`
  padding: 40px 0;

  .container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 600;

    padding: 12px 24px;
    border-radius: 12px;

    text-decoration: none;

    transition: var(--transition);

    color: var(--grey);

    &.phone {
      background: var(--purple);

      &:hover {
        opacity: 0.85;
      }
    }

    svg {
      width: 19.99px;
      height: auto;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
    }
  }
`;
