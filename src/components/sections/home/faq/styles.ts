import styled from "styled-components";

export const Faq = styled("section")`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 64px 0;
  background-color: var(--muted30);

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 1.875rem;
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    text-align: center;
    color: var(--muted-foreground);
  }

  .accordions {
    margin-top: 40px;
    width: 100%;
    max-width: 767px;

    display: flex;
    gap: 12px;
    flex-direction: column;

    > div {
      border: solid 1px var(--border-color);
      border-radius: 12px;
      background-color: var(--grey);
      transition: var(--transition);

      button,
      p {
        padding: 20px 24px;
      }

      button {
        border: none;
        background: transparent;

        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-weight: 600;
        text-align: left;
      }

      .content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s ease;

        p {
          overflow: hidden;
          padding: 0 24px;
          color: var(--muted-foreground);
          font-size: 0.875rem;
          line-height: 1.25rem;

          opacity: 0;
          transform: translateY(-4px);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }
      }

      &.open {
        box-shadow:
          0 0 #0000,
          0 0 #0000,
          0 0 #0000,
          0 0 #0000,
          0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);

        .content {
          grid-template-rows: 1fr;
        }

        .content > p {
          opacity: 1;
          transform: translateY(0);
          padding-bottom: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 54px 0;

    h2 {
      font-size: 1.7rem;
      margin-bottom: 10px;
    }

    .accordions {
      margin-top: 35px;

      > div {
        button,
        p {
          padding: 20px 22px;
        }

        .content {
          p {
            padding: 0 22px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 44px 0;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 8px;
    }

    .accordions {
      margin-top: 30px;

      > div {
        button,
        p {
          padding: 20px;
        }

        .content {
          p {
            padding: 0 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 34px 0;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 6px;
    }

    .accordions {
      margin-top: 25px;

      > div {
        button,
        p {
          padding: 18px;
        }

        .content {
          p {
            padding: 0 18px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px 0;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 4px;
    }

    .accordions {
      margin-top: 20px;

      > div {
        button,
        p {
          padding: 15px;
          font-size: 0.9rem;
        }

        .content {
          p {
            padding: 0 15px;
      font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 650px) {
    h2 {
      font-size: 1.15rem;
    }
  }
`;
