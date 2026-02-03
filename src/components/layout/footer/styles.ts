import styled from "styled-components";

export const Footer = styled("footer")`
  width: 100%;
  display: flex;
  background-color: var(--blue-dark);

  a {
    white-space: nowrap;
  }

  .container {
    padding: 32px 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo,
  .copright {
    p {
      color: var(--grey70);
      font-size: 0.875rem;
      line-height: 1.25;
    }
  }

  .logo {
    display: flex;
    flex-direction: column;

    a {
      display: flex;

      width: fit-content;
      height: fit-content;

      margin-bottom: 12px;

      transition: var(--transition);

      &:hover {
        opacity: 0.65;
      }
    }
  }

  .contact {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;

    h3 {
      color: var(--grey);
      font-weight: 600;
      margin-bottom: 12px;
    }

    a {
      color: var(--grey80);
      font-size: 0.875rem;

      display: flex;
      gap: 8px;
      align-items: center;
      width: fit-content;

      &:hover {
        color: var(--grey);
      }

      & + * {
        margin-top: 8px;
      }

      svg {
        width: 16px;
        height: auto;
      }
    }
  }

  .copright {
    text-align: right;
  }

  @media only screen and (max-width: 1600px) {
    .container {
      padding: 30px 16px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      padding: 28px 16px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      padding: 26px 16px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      padding: 24px 16px;
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      padding: 22px 16px;
    }
  }

  @media only screen and (max-width: 768px) {
    text-align: center;

    .container {
      gap: 20px;
      padding: 20px 16px;
      justify-content: center;
      flex-direction: column;
    }

    .logo {
      align-items: center;
    }

    .copright {
      text-align: center;
    }
  }
`;
