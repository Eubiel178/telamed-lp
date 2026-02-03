import styled from "styled-components";

export const OfferBox = styled("div")`
  padding: 32px;
  text-align: center;
  color: var(--grey);
  background: linear-gradient(
    135deg,
    var(--green) 0%,
    var(--teal) 50%,
    var(--blue) 100%
  );

  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 0 #0000,
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  border-radius: 24px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    gap: 16px;
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    li {
      padding: 20px;
      border: solid 1px var(--white20);
      border-radius: 16px;
      backdrop-filter: blur(4px);
      background-color: var(--white10);

      h3 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.75;
        margin-bottom: 16px;

        span {
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.5;
        }
      }

      p {
        color: var(--white90);

        span {
          font-size: 0.875rem;
          line-height: 1.25;
        }

        strong {
          font-weight: 700;
        }

        & + * {
          margin-top: 8px;
        }
      }
    }
  }

  .price-employee {
    border-top: solid 1px var(--white20);
    margin-top: 24px;
    padding-top: 16px;

    font-size: 0.875rem;
    line-height: 1.8;

    strong {
      font-weight: 600;
    }
  }

  .buttons {
    display: flex;
    gap: 12px;
    flex-direction: column;
    width: 100%;

    margin-top: 24px;

    a {
      display: flex;
      gap: 12px;
      text-align: center;
      align-items: center;
      justify-content: center;

      padding: 16px;
      border-radius: 12px;

      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.6;

      text-decoration: none;
      transition: var(--transition);

      &:first-child {
        color: var(--primaryColor);
        background-color: var(--grey);

        &:hover {
          background-color: var(--white90);
        }
      }

      &:last-child {
        color: var(--grey);
        background-color: var(--white20);
        border: solid 1px var(--white30);

        &:hover {
          background-color: var(--white30);
        }
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 30px;

    h2 {
      font-size: 1.45rem;
      margin-bottom: 20px;
    }

    ul {
      li {
        padding: 18px;
      }
    }

    .price-employee {
      margin-top: 22px;
    }

    .buttons {
      margin-top: 22px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 25px;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 15px;
    }

    ul {
      li {
        padding: 16px;
      }
    }

    .price-employee {
      margin-top: 20px;
    }

    .buttons {
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 20px;

    h2 {
      font-size: 1.35rem;
    }

    ul {
      li {
        padding: 14px;

        h3 {
          font-size: 1rem;

          span {
            font-size: 0.9rem;
          }
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    .buttons {
      a {
        padding: 12px;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px;

    h2 {
      font-size: 1.3rem;
    }

    ul {
      li {
        h3 {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    h2 {
      font-size: 1.25rem;
    }
  }

  @media only screen and (max-width: 520px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;
