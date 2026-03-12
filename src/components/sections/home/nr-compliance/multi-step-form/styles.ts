import styled from "styled-components";

export const MultiStepForm = styled("div")`
  .logo {
    width: fit-content;
    transition: var(--transition);
    display: block;

    &:hover {
      opacity: 0.65;
    }

    & + * {
      margin-top: 11px;
    }

    img {
      width: 233.48px;
      height: unset;
      aspect-ratio: 233.48/80;
    }
  }

  h2 {
    font-size: 1.875rem;
    line-height: 1.2;
    font-weight: 700;
    font-family: var(--font-default);

    & + * {
      margin-top: 16px;
    }

    span {
      color: var(--purple);
    }
  }

  form {
    padding: 33px 32px;
    border: 1px solid var(--border-color);
    background-color: var(--grey);
    border-radius: 24px;
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);

    .progress {
      p {
        color: var(--muted-foreground);
        font-size: 0.75rem;
        line-height: 1.2;
        margin-bottom: 4px;

        display: flex;
        gap: 2px;
        align-items: center;
        justify-content: space-between;
      }

      .progress-track {
        width: 100%;
        height: 9px;
        overflow: hidden;
        background: var(--muted);
        border-radius: 9999px;
        margin-bottom: 24px;

        .bar {
          height: 100%;
          background-color: var(--purple);
          transition: var(--transition);
        }
      }
    }

    h3 {
      color: var(--foreground);
      font-family: var(--font-default);

      font-size: 1.125rem;
      line-height: 1.375;

      font-weight: 700;

      margin-bottom: 20px;
    }

    .field {
      & + * {
        margin-top: 16px;
      }

      input {
        display: flex;
        width: 100%;
        font-family: var(--font-ubuntu);
        color: var(--foreground);

        background-color: var(--grey);

        border: 1px solid var(--border-color);
        padding: 8px 12px;
        border-radius: 12px;

        font-size: 0.875rem;
        line-height: 1.25;

        border-radius: 12px;
        height: 48px;
        outline: none;

        &::placeholder {
          color: var(--foreground);
        }

        &:focus,
        &:focus-visible {
          outline: none;
          box-shadow:
            0 0 0 2px hsl(0 0% 100%),
            0 0 0 calc(2px + 2px) var(--green),
            0 0 #0000;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }

      .error-message {
        color: hsl(0 84.2% 60.2%);
        font-size: 0.875rem;
        margin-top: 4px;
      }
    }

    .step-1 {
      h3 {
        text-align: center;

        font-size: 1.25rem;
        line-height: 1.4;

        margin-bottom: 16px;
      }
    }

    .buttons {
      margin-top: 16px;
      width: 100%;

      button,
      a {
        color: var(--grey);
        background-color: var(--purple);

        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;

        height: 56px;
        width: 100%;
        padding: 8px 16px;
        border: none;
        outline: none;
        border-radius: 12px;

        transition: var(--transition);
        font-size: 115;
        line-height: 1;
        font-weight: 700;

        text-decoration: none;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    &:has(.optional) {
      .buttons {
        margin-top: 20px;
      }
    }

    .optional {
      text-align: center;
      margin-top: 22px;
      /* margin-top: 23px; */

      color: var(--muted-foreground);
      font-size: 0.75rem;
      line-height: 1;
    }
  }

  @media only screen and (max-width: 1600px) {
    .logo {
      img {
        width: 223px;
      }
    }

    h2 {
      font-size: 1.87rem;
    }

    form {
      padding: 31px 30px;

      h3 {
        font-size: 1.12rem;
        /* margin-bottom: 20px; */
      }

      .field {
        input {
          height: 46px;
        }
      }

      .step-1 {
        h3 {
          font-size: 1.2rem;
        }
      }

      .buttons {
        button,
        a {
          height: 54px;
          font-size: 1.12rem;
        }
      }

      /* &:has(.optional) {
        .buttons {
          margin-top: 20px;
        }
      } */
      /* 
      .optional {
        margin-top: 22px;
      } */
    }
  }

  @media only screen and (max-width: 1400px) {
    .logo {
      img {
        width: 203px;
      }
    }

    h2 {
      font-size: 1.77rem;
    }

    form {
      padding: 29px 28px;

      h3 {
        font-size: 1.115rem;
        /* margin-bottom: 20px; */
      }

      .field {
        input {
          height: 44px;
        }
      }

      .step-1 {
        h3 {
          font-size: 1.15rem;
        }
      }

      .buttons {
        button,
        a {
          height: 52px;
          font-size: 1.115rem;
        }
      }

      /* &:has(.optional) {
        .buttons {
          margin-top: 20px;
        }
      } */

      /* .optional {
        margin-top: 22px;
      } */
    }
  }

  @media only screen and (max-width: 1200px) {
    .logo {
      img {
        width: 193px;
      }
    }

    h2 {
      font-size: 1.67rem;
    }

    form {
      padding: 27px 26px;

      h3 {
        font-size: 1.11rem;
        /* margin-bottom: 20px; */
      }

      .field {
        input {
          height: 42px;
        }
      }

      .step-1 {
        h3 {
          font-size: 1.1rem;
        }
      }

      .buttons {
        button,
        a {
          height: 50px;
          font-size: 1.11rem;
        }
      }

      /* &:has(.optional) {
        .buttons {
          margin-top: 20px;
        }
      } */

      /* .optional {
        margin-top: 22px;
      } */
    }
  }

  @media only screen and (max-width: 1024px) {
    .logo {
      img {
        width: 180px;
      }
    }

    h2 {
      font-size: 1.65rem;
    }

    form {
      padding: 25px 24px;

      h3 {
        font-size: 1.105rem;
        /* margin-bottom: 20px; */
      }

      .field {
        input {
          height: 40px;
        }
      }

      .step-1 {
        h3 {
          font-size: 1.05rem;
        }
      }

      .buttons {
        button,
        a {
          height: 48px;
          font-size: 1.105rem;
        }
      }

      /* &:has(.optional) {
        .buttons {
          margin-top: 20px;
        }
      } */

      /* .optional {
        margin-top: 22px;
      } */
    }
  }

  @media only screen and (max-width: 900px) {
    .logo {
      img {
        width: 170px;
      }
    }

    h2 {
      font-size: 1.55rem;
    }

    form {
      h3 {
        font-size: 1.1rem;
      }

      .step-1 {
        h3 {
          font-size: 1rem;
        }
      }

      .buttons {
        button,
        a {
          font-size: 1.1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .logo {
      img {
        width: 160px;
      }
    }

    h2 {
      font-size: 1.45rem;
    }

    form {
      h3 {
        font-size: 1.05rem;
      }

      .step-1 {
        h3 {
          font-size: 1rem;
        }
      }

      .buttons {
        button,
        a {
          font-size: 1.05rem;
        }
      }
    }
  }
`;
